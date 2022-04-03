const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
const mongoose = require('mongoose')

router.use(expressValidator());

// requiring schema
const signoff = require('../models/signoffmodel')

// handling the get route

router.get('/signoff', (req, res) => {
    res.render('signoff');
 });

//handles fetching client data from the db to populate the table


// route for posting
router.post('/signoff', (req, res) => {
    // declare variables that match your form input names
    // we assign them to req because we are requesting node js to forward data
    const fullname = req.body.fullname;
    const phonenumber = req.body.phonenumber;
    const nin = req.body.nin;
    const vehicletype = req.body.vehicletype;
    const date = req.body.date;
    const receiptnumber = req.body.receiptnumber;
    const time = req.body.time;
    const gender = req.body.gender;
    
   
    const errors = req.validationErrors()
    if (errors) {
        res.render('signoff')
    }

    else {
        let newSignoff = new signoff({
            fullname: fullname,
            phonenumber: phonenumber,
            nin: nin,
            vehicletype: vehicletype,
            date: date,
            receiptnumber: receiptnumber,
            time:time,
            gender: gender,

        });
        // saving
        newSignoff.save((err) => {
            if (err) {
                console.error(err);
                return;
            }
            else {
                req.flash('sucess', 'yay! You have successfully signed off this customer.')
                console.log('Kylie, you have successfully signed off your first client');
                res.redirect('/dashboard')
            }
        })
    }

});

module.exports = router;