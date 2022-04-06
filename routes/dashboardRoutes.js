const express = require('express');
const router = express.Router();

//  requiring schema
const Registration = require('../models/registrationmodel')

//handles fetching client data from the db to populate the table
router.get('/dashboard', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all the members in the collection clients
        const data = await Registration.find({}).sort({$natural:-1});
        console.log('>>>>>> all registrations',data);
        // gives us the file dashboard and come with the registration data.
        // the registrations is what we call in pug
        res.render('dashboard', {registrations : data})
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all registrations',
            error
          });
    }
});

// DELETE USER
router.get('/deleteuser/:id',async (req, res) => {
  try {
    await Registration.deleteOne({_id: req.params.id})
     res.redirect('back')
    
  } catch (error) {
    //  the deletion has not happened
   res.status(400).send('unable to delete user')
  }
});

module.exports = router;