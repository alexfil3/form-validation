const form = document.querySelector('form');
const email = form.querySelector('#email');
const emailError = form.querySelector('#email + p');
const country = form.querySelector('#country');
const countryError = form.querySelector('#country + p');
const zipCode = form.querySelector('#zip-code');
const zipCodeError = form.querySelector('#zip-code + p');
const pwd = form.querySelector('#pwd');
const pwdError = form.querySelector('#pwd + p');
const pwdConf = form.querySelector('#pwd-conf');
const pwdConfError = form.querySelector('#pwd-conf + p');

email.addEventListener('input', emailValidation);

country.addEventListener('input', countryValidation);

zipCode.addEventListener('input', zipCodeValidation);

pwd.addEventListener('input', pwdValidation);

pwdConf.addEventListener('input', pwdConfValidation);

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if (!email.validity.valid) {
        emailValidation();
    }

    if (!country.validity.valid) {
        countryValidation();
    }

    if (!zipCode.validity.valid) {
        zipCodeValidation();
    }

    if (!pwd.validity.valid) {
        pwdValidation();
    }

    if (!pwdConf.validity.valid) {
        pwdConfValidation();
    }
}

function emailValidation() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address.";
      } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address.";
      } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
      } else {
        emailError.textContent = '';
      }
}


function countryValidation() {
    if (country.validity.valueMissing) {
        countryError.textContent = "You need to enter a Country.";
      } else if (country.validity.tooShort) {
        countryError.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
      } else {
        countryError.textContent = '';
      }
}

function zipCodeValidation() {
    if (zipCode.validity.valueMissing) {
        zipCodeError.textContent = "You need to enter a Zip-code.";
      } else {
        zipCodeError.textContent = '';
      }
}

function pwdValidation() {
    if (pwd.validity.valueMissing) {
        pwdError.textContent = "You need to enter a password.";
      } else if (pwd.validity.patternMismatch) {
        pwdError.textContent = "Minimum eight characters, at least one letter and one number.";
      } else {
        pwdError.textContent = '';
      }
}

function pwdConfValidation() {
    if (pwd.validity.valueMissing) {
        pwdConfError.textContent = "First you need to enter first password field than confirm it.";
      } else if (pwdConf.validity.valueMissing) {
        pwdConfError.textContent = "You need to enter a password confirmation.";
      } else if (pwd.value !== pwdConf.value) {
        pwdConfError.textContent = "Wrong password";
      } else {
        pwdConfError.textContent = '';
      }
}