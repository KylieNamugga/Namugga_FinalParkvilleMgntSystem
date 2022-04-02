// require mongoose
const mongoose = require('mongoose')
// this helps us capture our user name.
const passportLocalmongoose = require('passport-local-mongoose')

// create schema
const signupSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    // the example above means data is a string and it's required

    lastname: {
        type: String,
        required: true
    },
 
    email: {
        type: String,
        required: true,
        unique: true
    },

    //   commenting out so that password doesn't appear in database
    password: {
        type: String,
        required: true
    },

})
// our username is the email,we set it like this because it's not the default
signupSchema.plugin(passportLocalmongoose, {
    usernameField: "email",
});

// export schema
const Signup = module.exports = mongoose.model('Signup', signupSchema);
