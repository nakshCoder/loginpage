"use strict";

const loginUsername = document.querySelector(".loginUsername").value;

document.querySelector(".loginSubmit").addEventListener("click", function () {
  if (!loginUsername) {
    alert("Enter Username");
  }
});
