"use strict";

const alertBox = document.getElementsByClassName("alertBox");
const submit = document.getElementsByClassName("submit");
console.log(submit);
submit.addEventListener("click", function () {
  alertBox.classList.remove("hidden");
});
