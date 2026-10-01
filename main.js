
const form = document.querySelector("#form");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const nameErro = document.querySelector(".name-erro");
const emailErro = document.querySelector(".email-erro");
const passwordErro = document.querySelector(".password-erro");


// =========================
// FORM SUBMIT
// =========================

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let isValid = true;


    // =========================
    // NAME VALIDATION
    // =========================

    if (name.value.trim() === "") {

        nameErro.textContent = "Please enter your name";

        name.classList.add("error");
        name.classList.remove("success");

        isValid = false;

    } else {

        nameErro.textContent = "";

        name.classList.remove("error");
        name.classList.add("success");
    }


    // =========================
    // EMAIL VALIDATION
    // =========================

    if (email.value.trim() === "") {

        emailErro.textContent = "Please enter your email";

        email.classList.add("error");
        email.classList.remove("success");

        isValid = false;

    } else {

        emailErro.textContent = "";

        email.classList.remove("error");
        email.classList.add("success");
    }


    // =========================
    // PASSWORD VALIDATION
    // =========================

    if (password.value.trim() === "") {

        passwordErro.textContent = "Please enter your password";

        password.classList.add("error");
        password.classList.remove("success");

        isValid = false;

    } else {

        passwordErro.textContent = "";

        password.classList.remove("error");
        password.classList.add("success");
    }


    // =========================
    // SUCCESS
    // =========================

    if (isValid) {

        console.log("Form submitted successfully!");

        form.reset();

        name.classList.remove("success");
        email.classList.remove("success");
        password.classList.remove("success");
    }

});

