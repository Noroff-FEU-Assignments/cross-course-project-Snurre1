const form = document.querySelector("form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const fnameError = document.querySelector("#fnameError");
const lnameError = document.querySelector("#lnameError");
const emailError = document.querySelector("#emailError");
const textError = document.querySelector("#textError");
const success = document.querySelector(".success");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fname.value, 2) === true) {
    fnameError.style.display = "none";
  } else {
    fnameError.style.display = "block";
  }
  if (checkLength(lname.value, 2) === true) {
    lnameError.style.display = "none";
  } else {
    lnameError.style.display = "block";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(message.value, 8) === true) {
    textError.style.display = "none";
  } else {
    textError.style.display = "block";
  }
  if (
    checkLength(fname.value, 2) === true &&
    checkLength(lname.value, 2) === true &&
    validateEmail(email.value) === true &&
    checkLength(message.value, 8) === true
  ) {
    success.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
