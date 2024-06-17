function validate(e){
    // alert("Connected")
    let name = document.querySelector('#name').value
    let country = document.querySelector('#country').value
    let mobile  = document.querySelector('#mobile').value
    let email = document.querySelector('#email').value
    let password= document.querySelector('#password').value
    let password2 = document.querySelector('#password2').value
    let iagree=document.querySelector('#iagree')
    let dob = document.querySelector('#dob').value;

    let gender = document.querySelector("input[name='gender']:checked")
    let error=false

    if(name === "" || name === null){
        document.querySelector('#nameError').innerHTML="Please enter your name"
        document.querySelector('#name').style.border="1px solid red"
        error=true
    }else{
        document.querySelector('#nameError').innerHTML=""
        document.querySelector('#name').style.border="1px solid black"
    }

    if(!gender){
        document.querySelector('#genderError').innerHTML="Please select your gender"
        error=true
    }
    else{
        document.querySelector('#genderError').innerHTML=""
    }


    if(country === "" || country === null){
        document.querySelector('#countryError').innerHTML="Please select your Country"
        error=true
    }else{
        document.querySelector('#countryError').innerHTML=""
    }

    if(mobile === "" || mobile === null){
        document.querySelector('#mobileError').innerHTML="Please enter your Mobile Number"
        error=true
    }else if(mobile.length!=10 || isNaN(mobile)){
        document.querySelector('#mobileError').innerHTML="Please enter a valid Mobile Number"
    }
    else{
        document.querySelector('#mobileError').innerHTML=""
    }


    let emailPattern = /^[a-z]+[a-z0-9\._]{3,}@[a-z]{3,10}\.[a-z\.]{2,8}$/
    if(email === "" || email === null){
        document.querySelector('#emailError').innerHTML="Please enter your Email"
        error=true
    }else if(!email.match(emailPattern)){
        document.querySelector('#emailError').innerHTML="Please enter a valid Email"
    }
    else{
        document.querySelector('#emailError').innerHTML=""
    }


    let validPassword=true
    let passError = ""
    if(!password.match(/[a-z]/)){
        passError += "\<br>Password should contain atleast one lowercase character"
        validPassword=false
    }
    if(!password.match(/[A-Z]/)){
        passError += "\<br>Password should contain atleast one uppercase character"
        validPassword=false
    }
    if(!password.match(/[0-9]/)){
        passError += "\<br>Password should contain atleast one number"
        validPassword=false
    }
    if(!password.match(/[!@#$%^&*_()]/)){
        passError += "\<br>Password should contain atleast one special character"
        validPassword=false
    }
    if(password.length < 8 || password.length > 16){
        passError += "\<br>Password must be 8-16 char long"
        validPassword=false
    }
    if(!validPassword){
        document.querySelector("#passwordError").innerHTML=passError
        error=true
    }else{
        document.querySelector("#passwordError").innerHTML=""
    }
    
    if(password2 ==="" || password2 === null){
        document.querySelector("#password2Error").innerHTML="Confirm Password are required"
        error=true
    }
    else if(password != password2){
        document.querySelector("#password2Error").innerHTML="Password and Confirm Password does not match"
        error = true
    }else{
        document.querySelector("#password2Error").innerHTML=""
    }

    // Date validation limits
    let today=new Date()
    let maxDate=new Date()
    let minDate=new Date()

    maxDate.setFullYear(today.getFullYear() - 10)
    minDate.setFullYear(today.getFullYear() - 60)
   

    if(dob === "" || dob === null){
        document.querySelector('#dobError').innerHTML = "Please enter your date of birth";
        error = true;
    } else {
        let dobDate = new Date(dob);
        if(dobDate > maxDate || dobDate < minDate){
            document.querySelector('#dobError').innerHTML = "You must be between 10 and 60 years";
            error = true;
        } else {
            document.querySelector('#dobError').innerHTML = "";
        }
    }

    if (!iagree.checked) {
        document.querySelector("#iagreeError").innerHTML = "You must agree to the terms and conditions before submitting";
        error = true;
    }
    else{
        document.querySelector('#iagreeError').innerHTML=""
    }

    

    if(error){
        e.preventDefault()
    }
}