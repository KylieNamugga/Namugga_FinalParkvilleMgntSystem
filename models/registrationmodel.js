const mongoose = require('mongoose')

const registrationSchema = mongoose.Schema({
    fullname:{
        type: String,
        required: true 
    },
    phonenumber:{
        type: String,
        required: true
    },
    nin:{
        type: String,
        required: true
    },
    numberplate:{
        type: String,
        required: true
    },
    vehicletype:{
        type: String,
        required: true
    },
    service:{
        type: String,
        required: true
    },
    servicefee:{
        type: String,
        required: true
    },
    vehiclemodel:{
        type: String,
        required: true
    },
    colour:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    arrivaltime:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    batteryprice:{
        type: String,
        required: true
    },
    batterysize:{
        type: String,
        required: true
    },
    tyreprice:{
        type: String,
        required: true
    },
    tyresize:{
        type: String,
        required: true
    },

});

const Registration = module.exports = mongoose.model('Registration', registrationSchema  );