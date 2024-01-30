"use strict";

const emailEl = document.getElementById("email");
const btnEL = document.querySelector(".btn");
const errorTextEl = document.querySelector(".error-message");
const errorIconEl = document.querySelector(".error-icon");

btnEL.addEventListener("click", function () {
  event.preventDefault();
  const validateEmail = function (email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const isValid = validateEmail(emailEl.value);

  if (isValid) {
    // console.log(`Email is valid: ${emailEl.value}`);
    emailEl.style.outline = "2px solid hsl(135, 43%, 47%)";
  } else {
    emailEl.style.outline = "2px solid hsl(0, 93%, 68%)";
    emailEl.style.backgroundColor = "#fff";
    errorTextEl.classList.remove("hidden");
    errorIconEl.classList.remove("hidden");

    console.log(`Invalid email: ${emailEl.value}`);
  }
});
