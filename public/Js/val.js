const regValidation = () => {
    const fullname = document.getElementById('fullname')
    const phonenumber = document.getElementById('phonenumber')
    const nin = document.getElementById('nin')
    const numberplate = document.getElementById('numberplate')
    const vehicletype = document.getElementById('vehicletype')
    const service = document.getElementById('service')
    const servicefee = document.getElementById('servicefee')
    const vehiclemodel = document.getElementById('vehiclemodel')
    const colour = document.getElementById('colour')
    const date = document.getElementById('date')
    const time = document.getElementById('time')
    const gender = document.getElementById('gender')
    const batteryprice = document.getElementById('batteryprice')
    const batterysize = document.getElementById('batterysize')
    const tyreprice = document.getElementById('tyreprice')
    const tyresize = document.getElementById('tyresize')

    // VALIDATION ERRORS
    const fullnameError = document.getElementById('fullnameError')
    const phonenumberError = document.getElementById('phonenumberError')
    const ninError = document.getElementById('ninError')
    const numberplateError = document.getElementById('numberplateError')
    const vehicletypeError = document.getElementById('vehicletypeError')
    const serviceError = document.getElementById('serviceError')
    const servicefeeError = document.getElementById('servicefeeError')
    const vehiclemodelError = document.getElementById('vehiclemodelError')
    const colourError = document.getElementById('colourError')
    const dateError = document.getElementById('dateError')
    const timeError = document.getElementById('timeError')
    const genderError = document.getElementById('genderError')
    const batterypriceError = document.getElementById('batterypriceError')
    const batterysizeError = document.getElementById('batterysizeError')
    const tyrepriceError = document.getElementById('tyrepriceError')
    const tyresizeError = document.getElementById('tyresizeError')

    // FULL NAME VALIDATION
    if (fullname.value == "") {
        fullname.style.border = "1px solid red"
        fullnameError.innerHTML = "Please provide Client Full name";
        fullnameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        fullname.style.border = "1px solid green"
    }

    // PHONE NUMBER VALIDATION
    if (phonenumber.value == "") {
        phonenumber.style.border = "1px solid red"
        phonenumberError.innerHTML = "Please provide Client Phone Number";
        phonenumberError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        // const phonenumberRegex = /^[A-Z][a-z]{3,10}$/
        //     if (phonenumberRegex.test(phonenumber.value) === false) {
        //         phonenumber.style.border = '1px solid red';
        //         phonenumberError.innerHTML = "Valid UG number +256";
        //         phonenumberError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        //         return false
        //     }
        phonenumber.style.border = "1px solid green"
    }



    // NIN VALIDATION
    if (nin.value == "") {
        nin.style.border = "1px solid red"
        ninError.innerHTML = "Please provide Client NIN";
        ninError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        const ninRegex = /^[A-Z][a-z]{3,10}$/
            // if (ninRegex.test(nin.value) === false) {
            //     nin.style.border = '1px solid red';
            //     ninError.innerHTML = "please provide valid UG NIN with alphanumeric characters";
            //     ninError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            //     return false
            // }
        nin.style.border = "1px solid greeen"
    }

    // NUMBER PLATE VALIDATION
    if (numberplate.value == "") {
        numberplate.style.border = "1px solid red"
        numberplateError.innerHTML = "Please provide Client Number Plate";
        numberplateError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        const numberplateRegex = /^[A-Z][a-z]{3,10}$/
            // if (numberplateRegex.test(numberplate.value) === false) {
            //     numberplate.style.border = '1px solid red';
            //     numberplateError.innerHTML = "first name should be 5-10 characters";
            //     numberplateError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            //     return false
            // }
        numberplate.style.border = "1px solid green"
    }

    // VEHICLE TYPE
    if (vehicletype.value == "Default") {
        vehicletype.style.border = "1px solid red"
        vehicletypeError.textContent = "Please select a vehicle type"
        vehicletypeError.style = "color: red"
        return false
    } else {
        vehicletype.style.border = "1px solid green"
    }

    // SERVICE TYPE VALIDATION
    if (service.value == "Default") {
        service.style.border = "1px solid red"
        serviceError.innerHTML = "Please Choose at least One service";
        serviceError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        service.style.border = "1px solid green"
    }

    // PARKING FEE VALIDATION
    if (servicefee.value == "Default") {
        servicefee.style.border = "1px solid red"
        servicefeeError.innerHTML = "Please select Fee or 0 if not required";
        servicefeeError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        servicefee.style.border = "1px solid green"

    }

    // VEHICLE MODEL
    if (vehiclemodel.value == "") {
        vehiclemodel.style.border = "1px solid red"
        vehiclemodelError.innerHTML = "Please provide Vehicle Model";
        vehiclemodelError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false

    } else {
        vehiclemodel.style.border = "1px solid green"

    }

    // COLOUR VALIDATION
    if (colour.value == "") {
        colour.style.border = "1px solid red"
        colourError.innerHTML = "Please fill in colour";
        colourError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false

    } else {
        colour.style.border = "1px solid green"
    }

    // DATE VALIDATION
    if (date.value == "") {
        date.style.border = "1px solid red"
        dateError.innerHTML = "Please Fill in the Date";
        dateError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false

    } else {
        date.style.border = "1px solid green"
    }

    // ARRIVAL TIME VALIDATION
    if (time.value == "") {
        time.style.border = "1px solid red"
        timeError.innerHTML = "Please capture Arrival Time";
        timeError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false

    } else {
        time.style.border = "1px solid green"
    }

    // GENDER
    if (gender.value == "Default") {
        gender.style.border = "1px solid red"
        genderError.innerHTML = "Please select Gender";
        genderError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        gender.style.border = "1px solid green"

    }

    // BATTERY PRICE
    if (batteryprice.value == "Default") {
        batteryprice.style.border = "1px solid red"
        batterypriceError.innerHTML = "Please select fee or 0 where not required";
        batterypriceError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        batteryprice.style.border = "1px solid green"

    }

    // BATTERY SIZE
    if (batterysize.value == "Default") {
        batterysize.style.border = "1px solid red"
        batterysizeError.innerHTML = "Please select Battery size or Not Applicable if not required";
        batterysizeError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        batterysize.style.border = "1px solid green"
    }

    // TYRE PRICE
    if (tyreprice.value == "Default") {
        tyreprice.style.border = "1px solid red"
        tyrepriceError.innerHTML = "Please choose fee or 0 if service is not required";
        tyrepriceError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        tyreprice.style.border = "1px solid green"
    }

    // TYRE SIZE
    if (tyresize.value == "Default") {
        tyresize.style.border = "1px solid red"
        tyresizeError.innerHTML = "Please choose Battery size or Not applicable";
        tyresizeError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        tyresize.style.border = "1px solid green"
    }
};
