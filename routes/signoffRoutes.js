const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
const mongoose = require('mongoose')

router.use(expressValidator());

// Requiring schema
const signoff = require('../models/signoffmodel')

// My Get route

router.get('/signoff', (req, res) => {
    res.render('signoff');
});

// Posting Route
router.post('/signoff', (req, res) => {
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
            time: time,
            gender: gender,

        });
        // Saving the signed off car
        newSignoff.save((err) => {
            if (err) {
                console.error(err);
                return;
            }
            else {
                console.log('Kylie, you have successfully signed off your first client');
                res.redirect('/dashboard')
            }
        })
    }

});

module.exports = router;