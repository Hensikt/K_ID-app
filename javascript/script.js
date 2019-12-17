function validateFrom() {
    let username = document.forms["form"]["Username"].value;
    let password = document.forms["form"]["Password"].value;
    let U = document.getElementById("Username");
    let P = document.getElementById("Password");

    if (username === "U3254" && password !== "somepass") {
        U.style.cssText = 'border: 1px solid green;';
        P.value = "";
        P.style.cssText = 'border: 1px solid red;';
        P.placeholder = "Invalid Pass";
        P.classList.add("invalid__placeholder");
        // alert("Name must be filled in");
        return false
    }
    if (password === "somepass" && username !== "U3254") {
        P.style.cssText = 'border: 1px solid green';
        U.value = "";
        U.style.cssText = 'border: 1px solid red;';
        U.placeholder = "Invalid User";
        U.classList.add("invalid__placeholder");
        return false

    }
    if (password === "somepass" && username === "U3254") {
        location.href = 'patient.html';
        return true

    } else {
        U.style.cssText = 'border: 1px solid red;';
        U.placeholder = "Invalid User";
        U.classList.add("invalid__placeholder");
        P.style.cssText = 'border: 1px solid red;';
        P.placeholder = "Invalid Pass";
        P.classList.add("invalid__placeholder");
        return false
    }
}

function toggler() {
    let check = document.getElementById("Password");
    let eye = document.getElementById("imgEye");
    if (check.type === "password") {
        check.type = "text";
        eye.style.backgroundImage = "url('img/closed_eye.png')";
    } else {
        check.type = "password";
        eye.style.backgroundImage = "url('img/eye.png')";
    }
}

function emailSend() {
    let mail = document.forms["form"]["Email"].value;
    let E = document.getElementById("Email");
    if (mail.includes('@gmail.com') || mail.includes('@hotmail.com')) {
        E.value = "";
        E.style.cssText = 'border: 1px solid green; color: green;';
        E.classList.add("valid__placeholder");
        E.placeholder = "Email sended";
        location.href = 'app.html';
    } else {
        E.value = "";
        E.style.cssText = 'border: 1px solid red;';
        E.placeholder = "Invalid Email";
        E.classList.add("invalid__placeholder");
    }

}