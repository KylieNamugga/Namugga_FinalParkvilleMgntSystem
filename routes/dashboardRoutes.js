const express = require('express');
const router = express.Router();

//Requiring schema
const Registration = require('../models/registrationmodel')

//Fetching data from the mongo to populate the table
router.get('/dashboard', async (req, res) => {
  try {
    const data = await Registration.find({}).sort({ $natural: -1 });

    // Accumulating total Price for different sections
    let totalParking = await Registration.aggregate([
      { $group: { _id: '$all', totalParking: { $sum: '$servicefee' } } }
    ]);

    // let totalTyrePrice = await Registration.aggregate([
    //   {$group:{_id:'$any', totalTyrePrice:{ $sum:'$tyreprice'}}}
    // ]);

    // let totalBatteryPrice = await Registration.aggregate([
    //   {$group:{_id:'$many', totalBatteryPrice:{ $sum:'$batteryprice'}}}
    // ]);


    // give me the file dashboard and come with the registration data.
    res.render('dashboard', {
      registrations: data,
      total: totalParking[0],
      // total:totalTyrePrice[0],
      // total:totalBatteryPrice[0],
    })
  } catch (error) {
    return res.status(400).send(
      {
        status: 400,
        message: 'Oops failed to fetch all registrations',
        error
      });
  }
});

// Deleting Client
router.get('/deleteuser/:id', async (req, res) => {
  try {
    await Registration.deleteOne({ _id: req.params.id })
    res.redirect('back')

  } catch (error) {
    res.status(400).send('unable to delete user')
  }
});

//Updating Client Info
router.get("/update/:id", async (req, res) => {
  try {
    const updateUser = await Registration.findOne({ _id: req.params.id })
    res.render('registrationedits', { registration: updateUser })
  } catch (error) {
    res.status(400).send("unable to find the user in the database");
  }
});

router.post("/update/", async (req, res) => {
  try {
    const updated = await Registration.findOneAndUpdate({ _id: req.query.id }, req.body)
    res.redirect("/dashboard");
  } catch (error) {
    res.status(400).send("unable to update registration");
  }
});

module.exports = router;