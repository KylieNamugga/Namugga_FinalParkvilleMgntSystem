const mongoose = require('mongoose')

const SignoffSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    nin: {
        type: String,
        required: true
    },

    vehicletype: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    receiptnumber: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

});

const Signoff = module.exports = mongoose.model('Signoff', SignoffSchema);