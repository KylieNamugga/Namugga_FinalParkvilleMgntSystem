const express = require('express');
const router = express.Router();

//Requiring schema
const Registration = require('../models/registrationmodel')

//Fetching data from the mongo to populate the table
router.get('/dashboard', async (req, res) => {
  try {
    const data = await Registration.find({}).sort({ $natural: -1 });

    // Accumulating total Price for different sections
    // Total earnings is an array that has different totals earned from parking.
    // These values are being picked from the same collection total earnings.

    let totalEarnings = await Registration.aggregate([
      {$group: {_id:'$all',
      totalParking:{$sum:'$servicefee'},
      totalTyrePrice:{$sum:'$tyreprice'},
      totalBatteryPrice:{$sum:'$batteryprice'},

    }}]);

    console.log('This is our collection of all earnings', totalEarnings);
    // give me the file dashboard and come with the registration data.
    res.render('dashboard', {
      registrations: data, 
      // accessing my earnings
      total:totalEarnings[0],

      
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

// Deleting Client Record  
router.get('/deleteuser/:id', async (req, res) => {
  try {
    await Registration.deleteOne({ _id: req.params.id })
    res.redirect('back')

  } catch (error) {
    res.status(400).send('unable to delete user')
  }
});

//Updating Client Info
// we pick information from the database first through the get route
router.get("/update/:id", async (req, res) => {
  try {
    const updateUser = await Registration.findOne({ _id: req.params.id })
    res.render('registrationedits', { registration: updateUser })
  } catch (error) {
    res.status(400).send("unable to find the user in the database");
  }
});

// we re-post information through the post route
router.post("/update/", async (req, res) => {
  try {
    const updated = await Registration.findOneAndUpdate({ _id: req.query.id }, req.body)
    res.redirect("/dashboard");
  } catch (error) {
    res.status(400).send("unable to update registration");
  }
});

module.exports = router;