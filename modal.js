function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Get close button
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* Close the Modal by window clicking
window.onclick = function(event) {
  if (event.target === modalbg) {
    modalbg.style.display = "none";
  }
}
*/

// Close the Modal by clicking on "close button"
closeBtn.onclick = function() {
  modalbg.style.display = "none";
}

