const signOffVal = () => {
    var fullname = document.getElementById('fullname');
    var phonenumber = document.getElementById('phonenumber');
    var nin = document.getElementById('nin');
    var vehicletype = document.getElementById('vehicletype');
    var date = document.getElementById('date');
    var receipt = document.getElementById('receipt');
    var time = document.getElementById('time');
    var gender = document.getElementById('gender');

    // validation errors in small tag
    const fullnameError = document.getElementById("fullnameError");
    const phonenumberError = document.getElementById("phonenumberError");
    const ninError = document.getElementById("ninError");
    const vehicletypeError = document.getElementById("vehicletypeError");
    const dateError = document.getElementById("dateError");
    const receiptnumberError = document.getElementById("receiptnumberError");
    const timeError = document.getElementById("timeError");
    const genderError = document.getElementById("genderError");

    // FULL NAME VALIDATION
    if (fullname.value == '') {
        fullname.style.border = '1px solid red';
        fullnameError.innerHTML = "Please provide Client Full name";
        fullnameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        fullname.style.border = "1px solid green"
    }

    // PHONENUMBER VALIDATION
    if (phonenumber.value == '') {
        phonenumber.style.border = '1px solid red';
        phonenumberError.innerHTML = "Please provide Client Phone Number";
        phonenumberError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        phonenumber.style.border = "1px solid green"
    }

    // NIN VALIDATION
    if (nin.value == '') {
        nin.style.border = '1px solid red';
        ninError.innerHTML = "Please provide Valid NIN";
        ninError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        nin.style.border = "1px solid green"
    }

    // VEHICLE TYPE VALIDATION
    if (vehicletype.value == "Default") {
        vehicletype.style.border = "1px solid red"
        vehicletypeError.innerHTML = "Please select one vehicle type";
        vehicletypeError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        vehicletype.style.border = "1px solid green"
    }


    // DATE VALIDATION
    if (date.value == '') {
        date.style.border = '1px solid red';
        dateError.innerHTML = "Please fill in date";
        dateError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        date.style.border = "1px solid green"
    }
    // RECEIPT VALIDATION
    if (receipt.value == '') {
        receipt.style.border = '1px solid red';
        receiptnumberError.innerHTML = "Please provide Client Receipt Number";
        receiptnumberError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        receipt.style.border = "1px solid green"
    }
    // TIME VALIDATION
    if (time.value == '') {
        time.style.border = '1px solid red';
        timeError.innerHTML = "Please provide Client Phone Number";
        timeError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        time.style.border = "1px solid green"
    }
    // GENDER VALIDATION
    if (gender.value == "Default") {
        gender.style.border = "1px solid red"
        genderError.innerHTML = "Please select Client Gender";
        genderError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        gender.style.border = "1px solid green"
    }

}