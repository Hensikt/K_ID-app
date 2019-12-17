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

function toggler(e) {
    if (e.innerHTML === 'Show'){
        e.innerHTML = 'hide';
        document.getElementById('Password').type = "text";
    } else {
        e.innerHTML = 'Show';
        document.getElementById('Password').type = "password";
    }
}