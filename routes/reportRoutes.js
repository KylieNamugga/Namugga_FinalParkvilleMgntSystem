const express = require('express');
const router = express.Router();

//  requiring schema
const Signoff = require('../models/signoffmodel')

//handles fetching client data from the db to populate the table
router.get('/report', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all the members in the collection clients
        const data = await Signoff.find({}).sort({$natural:-1});
        console.log('>>>>>> all signoffs',data);
        // gives us the file dash and come with the client data or client has same info with data
        // the registrations is what we call in pug
        res.render('report', {signoffs : data})
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Sorry failed to fetch all signoffs',
            error
          });
    }
});

module.exports = router;