const form = document.getElementById('form');
const username =  document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the value from the input

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, "username can't be blank");
    }else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "email can't be blank");
    } else if (!isEmail(emailValue)){
        setErrorFor(email, "email is not valid");
    }else {
        setSuccessFor(email);
    }

    if (passwordValue === ""){
        setErrorFor(password, "password can't be blank");
    } else {
        setSuccessFor(password);
    }

    if (password2Value === "") {
        setErrorFor(password2, "password confirm can't be blank");
    }else if (passwordValue !== password2Value) {
        setErrorFor(password2, "password does not match")
    }else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControle = input.parentElement;
    const small = formControle.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControle.className = 'form-controle error';
}

function setSuccessFor(input) {
    const formControle = input.parentElement;

    // add success class
    formControle.className = 'form-controle success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}