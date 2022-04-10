// validation at the top of our forms
const validateSignUp = () => {
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    // validation errors in small tag
    const fNameError = document.getElementById("fNameError");
    const lNameError = document.getElementById("lNameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");


    // name should not be empty
    if (firstname.value == '') {
        firstname.style.border = '1px solid red';
        fNameError.innerHTML = "Please provide your first name";
        fNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        // name should start with capital letter
        const fNameRegex = /^[A-Z][a-z]*$/;
        if (fNameRegex.test(firstname.value) === false) {
            firstname.style.border = '1px solid red';
            fNameError.innerHTML = "first name should start with a capital letter";
            fNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
            // name should be these characters
        } else {
            const fNamelengthRegex = /^[A-Z][a-z]{2,10}$/
            if (fNamelengthRegex.test(firstname.value) === false) {
                firstname.style.border = '1px solid red';
                fNameError.innerHTML = "first name should be 3-10 characters";
                fNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
                return false
            }
        }


    }

    // last name validation (Kylie)
    if (lastname.value == '') {
        lastname.style.border = '1px solid red';
        lNameError.innerHTML = "Please provide your last name";
        lNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        // name should start with capital letter
        const lNameRegex = /^[A-Z][a-z]*$/;
        if (lNameRegex.test(lastname.value) === false) {
            lastname.style.border = '1px solid red';
            lNameError.innerHTML = "last name should start with a capital letter";
            lNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
            // name should be these characters
        } else {
            const lNamelengthRegex = /^[A-Z][a-z]{2,10}$/
            if (lNamelengthRegex.test(lastname.value) === false) {
                lastname.style.border = '1px solid red';
                lNameError.innerHTML = "first name should be 5-10 characters";
                lNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
                return false
            }
        }


    }

    // email should not be empty
    if (email.value == '') {
        email.style.border = '1px solid red';
        emailError.innerHTML = "email field should not be left empty";
        emailError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        //  email format of kylie@gmail.com
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(email.value) === false) {
            email.style.border = '1px solid red';
            emailError.innerHTML = "Please provide a valid email";
            emailError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
        };
    }

    // validating password
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/
    if (password.value != '' && password.value.match(passwordRegex)) {

    }
    else {
        password.style.border = '1px solid red';
        passwordError.innerHTML = 'Please provide password of Minimum eight characters,atleast 1 uppercase,1 lowercase and 1 number:'
        passwordError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;'
        return false
    }

}

