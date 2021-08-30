// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close"); // Get close button

// Get Form elements
const userFirstName = document.getElementById('first');
const userLastName = document.getElementById('last');
const userEmail = document.getElementById('email');
const userBirthdate = document.getElementById('birthdate');
const numberOfTournamentParticipated = document.getElementById('quantity');
const allLocationsBox = document.querySelector('#location-box');
const checkOnelocationRadio = document.querySelectorAll('#location-box .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const inputTextControl = document.getElementsByClassName('text-control')[0];
const formControl = document.getElementById('modal-form');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Get form submit and confirmation
const modalSubmit = document.getElementById('submitConfirmation-container');
const modalSubmitClose = document.getElementById('submitConfirmation-closeX');
const modalSubmitConfirmationCloseBtn = document.getElementById('submitConfirmation-closeBtn');


//************************************************************* */
// Responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//************************************************************* */
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close the Modal by clicking on "close button"
closeBtn.onclick = function() {
  modalbg.style.display = "none";
}

//************************************************************ */
// Validation field form
// User identity check

// First name
function userFirstNameCheck() {
  if (userFirstName.value.trim().length < 2 || userFirstName.value.trim() === "" || !userFirstName.value.match(regex)) {
    userFirstName.parentElement.setAttribute('data-error-visible', 'true');
    userFirstName.style.border = "2px solid #e54858";
    return false;
  }
  userFirstName.parentElement.setAttribute('data-error-visible', false);
  userFirstName.style.border = "2px solid #279e7a";
  return true;
}


// Last name
function userLastNameCheck() {
  if (userLastName.value.trim().length < 2 || userLastName.value.trim() === "" || !userLastName.value.match(regex)) {
    userLastName.parentElement.setAttribute('data-error-visible', 'true');
    userLastName.style.border = "2px solid #e54858";
    return false;
  }
  userLastName.parentElement.setAttribute('data-error-visible', 'false');
  userLastName.style.border = "2px solid #279e7a";
  return true;
}


// Email check
function userEmailCheck() {
  if (userEmail.value.trim().match(regexEmail)) {
    userEmail.parentElement.setAttribute('data-error-visible', 'false');
    userEmail.style.border = "2px solid #279e7a";
    return true;
  }
  userEmail.parentElement.setAttribute('data-error-visible', 'true');
  userEmail.style.border = "2px solid #e54858";
  return false;
}

// Birthdate check 
function userBirthdateCheck() {
  // Get today's date and compare it to the user birthdate
  const nowDate = new Date();
  todayDate = (nowDate.getFullYear()) + "-" + (nowDate.getMonth()+1) + "-" + nowDate.getDate();
  todayDate = new Date(todayDate);
  userBirthdateBis = new Date(userBirthdate.value);

  if (userBirthdate.value.trim().length !== 10 || userBirthdateBis > todayDate) {
    userBirthdate.parentElement.setAttribute('data-error-visible', 'true');
    userBirthdate.style.border = "2px solid #e54858";
    return false;
  }
  userBirthdate.parentElement.setAttribute('data-error-visible', 'false');
  userBirthdate.style.border = "2px solid #279e7a";
  return true;
}

// Number of tournament check
function numberOfTournamentParticipatedCheck() {
  if (numberOfTournamentParticipated.value.trim().length === 0 ||
     isNaN(numberOfTournamentParticipated.value.trim()) === true ||
     numberOfTournamentParticipated.value.trim() < 0) {
       numberOfTournamentParticipated.parentElement.setAttribute('data-error-visible', 'true');
       numberOfTournamentParticipated.style.border = "2px solid #e54858";
       return false;
  }
  numberOfTournamentParticipated.parentElement.setAttribute('data-error-visible', 'false');
  numberOfTournamentParticipated.style.border = "2px solid #279e7a";
  return true;
}

// Locations check
function locationBoxCheck() {
  allLocationsBox.setAttribute('data-error-visible', 'true');
  for (let i = 0; i < checkOnelocationRadio.length; i++) {
    if (checkOnelocationRadio[i].checked) {
      allLocationsBox.setAttribute('data-error-visible', 'false');
      return true;
    }
    allLocationsBox.style.border = "2px solid #279e7a";
  }
  allLocationsBox.style.border = "2px solid red";
  return false;
}

// Terms of use check
function termsOfUsecheck() {
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  checkbox1.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

// Form Field events
function formFieldEventValidation(element, method, event) {
  element.addEventListener(event, method);
} 

formFieldEventValidation(userFirstName, userFirstNameCheck, 'focusout');
formFieldEventValidation(userLastName, userLastNameCheck, 'focusout');
formFieldEventValidation(userEmail, userEmailCheck, 'focusout');
formFieldEventValidation(userBirthdate, userBirthdateCheck, 'focusout');
formFieldEventValidation(numberOfTournamentParticipated, numberOfTournamentParticipatedCheck, 'focusout');
formFieldEventValidation(allLocationsBox, locationBoxCheck, 'change');
formFieldEventValidation(checkbox1, termsOfUsecheck, 'change');

// Form field and form validation
function formFieldAllElementsValidation() {
  userFirstNameCheck();
  userLastNameCheck();
  userEmailCheck();
  userBirthdateCheck();
  numberOfTournamentParticipatedCheck();
  locationBoxCheck();
  termsOfUsecheck();
}

function formValidation() {
  if (userFirstNameCheck() === true &&
      userLastNameCheck() === true &&
      userEmailCheck() === true && 
      userBirthdateCheck() === true && 
      numberOfTournamentParticipatedCheck() === true &&
      locationBoxCheck() === true &&
      termsOfUsecheck() === true) {
    return true;
  }
  return false;
}

//************************************************************ */
// Form submit

// Modal submit confirmation
// Display modal submit
function modalSubmitDisplay() {
  modalbg.style.display = "none";
  modalSubmit.style.display = "block";
}

// Modal close submit
function submitConfirmationClose() {
  modalSubmit.style.display = "none";
  userFirstName.style.border = "none";
  userLastName.style.border = "none";
  userEmail.style.border = "none";
  userBirthdate.style.border = "none";
  numberOfTournamentParticipated.style.border = "none";
}

// Modal close submit event
modalSubmitClose.addEventListener('click', submitConfirmationClose);
modalSubmitConfirmationCloseBtn.addEventListener('click', submitConfirmationClose);

//************************************************************ */
// Form send
formControl.addEventListener('submit', function(event) {
  event.preventDefault();
  if (formValidation() === true) {
    modalSubmitDisplay();
    document.querySelector('#modal-form').reset();
  } else {
    formFieldAllElementsValidation();
    }
});
