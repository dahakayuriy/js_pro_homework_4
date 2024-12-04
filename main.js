"use strict";

const number = prompt("Enter a five-digit number:");

alert(
  number.length === 5 && !isNaN(number)
    ? number.split("").join(" ")
    : "Please enter the correct five-digit number."
);
