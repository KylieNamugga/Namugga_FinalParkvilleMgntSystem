const express = require('express');
const router = express.Router();

//  requiring schema
const Registration = require('../models/registrationmodel')

//handles fetching client data from the db to populate the table
router.get('/dashboard', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all the members in the collection clients
        const data = await Registration.find({});
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


module.exports = router;