const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
const bcrypt = require('bcryptjs/dist/bcrypt')

router.use(expressValidator());

// requiring our schema
const Signup = require('../models/signupmodel');

// handling the sign up route for get
router.get('/signup', (req, res) => {
    res.render('signup');
});

// posting using catch, async and await

router.post('/signup', async (req, res) => {
    console.log(req.body)
   
    try {
        const newSignup = new Signup(req.body);
        let user = await Signup.findOne({email:req.body.email});
        if(user){
            return res.status(400).send('You are not registered because the email provided has already been used to sign up.')
        }

        else {
            bcrypt.genSalt(7,(err,salt) => {
                bcrypt.hash(newSignup.password, salt,(err,hash) =>{
                    if(err){
                        console.error(err);
                        return;
                    }
                    newSignup.password = hash;
                });
            });

            await Signup.register(newSignup, req.body.password, (err) => {
                if(err){ //Register method has an inbuilt encryption
                    throw error;
                }
                res.redirect('/login');
            } );
        }
       
    }

    catch(err){
        console.log(err);
        res.send('You data wasnt saved')
    }

});

module.exports = router;