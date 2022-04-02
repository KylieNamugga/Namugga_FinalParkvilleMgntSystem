const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
const mongoose = require('mongoose')

router.use(expressValidator());

// requiring schema
const Registration = require('../models/registrationmodel')

// handling the get route

router.get('/registration', (req, res) => {
    res.render('registration');
 });

//handles fetching client data from the db to populate the table


// route for posting
router.post('/registration', (req, res) => {
    // declare variables that match your form input names
    // we assign them to req because we are requesting node js to forward data
    const fullname = req.body.fullname;
    const phonenumber = req.body.phonenumber;
    const nin = req.body.nin;
    const numberplate = req.body.numberplate;
    const vehicletype = req.body.vehicletype;
    const service = req.body.service;
    const servicefee = req.body.servicefee;
    const vehiclemodel = req.body.vehiclemodel;
    const colour = req.body.colour;
    const date = req.body.date;
    const arrivaltime = req.body.arrivaltime;
    const gender = req.body.gender;
    const batteryprice = req.body.batteryprice;
    const batterysize = req.body.batterysize;
    const tyreprice = req.body.tyreprice;
    const tyresize = req.body.tyresize;

    const errors = req.validationErrors()
    if (errors) {
        res.render('registration')
    }

    else {
        let newRegistration = new Registration({
            fullname: fullname,
            phonenumber: phonenumber,
            nin: nin,
            numberplate: numberplate,
            vehicletype: vehicletype,
            service: service,
            servicefee: servicefee,
            vehiclemodel: vehiclemodel,
            colour: colour,
            date: date,
            arrivaltime: arrivaltime,
            gender: gender,
            batteryprice: batteryprice,
            batterysize: batterysize,
            tyreprice: tyreprice,
            tyresize: tyresize

        });
        // saving
        newRegistration.save((err) => {
            if (err) {
                console.error(err);
                return;
            }
            else {
                req.flash('sucess', 'yay! You have successfully registered this customer.')
                console.log('Kylie, you have successfully registered your first client');
                res.redirect('/dashboard')
            }
        })
    }

});

module.exports = router;