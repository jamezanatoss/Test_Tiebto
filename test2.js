function check(){
    var alertmassage = "";
    var validate = false;

    if(document.getElementById('Firstname').value == ""){
        alertmassage = alertmassage + "Please Enter your First Name \n";
    }

    if(document.getElementById('Firstname').value.length > 20){
        alertmassage = alertmassage + "Max Length For FirstName is 20 \n";
    }

    if(document.getElementById('Lastname').value == ""){
        alertmassage = alertmassage + "Please Enter your Last name \n";
    }

    if(document.getElementById('Email').value == ""){
        alertmassage = alertmassage + "Please Enter your Email \n";
    }
    else if(!validateEmail(Email.value.trim())){
        alertmassage = alertmassage + "Email: Enter a valid Email Address \n";
    } 

    if(document.getElementById("accept").checked) {
        alertmassage = alertmassage;
    }
    else{
        alertmassage = alertmassage + "Please check to Acceptance \n";

    }

    function validateEmail(Email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(Email).toLowerCase());
    }

    if(alertmassage == ""){
        validate = true;
    }
    else{
        alert(alertmassage);
        return false;
    }
}