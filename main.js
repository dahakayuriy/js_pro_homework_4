"use strict";

const fiveDigitNumberInput = prompt("Enter a five-digit number:");

if (fiveDigitNumberInput === null) {
  alert("Hasta la vista baby");
} else if (
  !fiveDigitNumberInput.trim() ||
  isNaN(fiveDigitNumberInput) ||
  !Number.isInteger(+fiveDigitNumberInput)
) {
  alert("Error: invalid number");
} else {
  const num = Math.abs(+fiveDigitNumberInput);
  if (String(num).length === 5) {
    alert("Ok, you are wellcome!");
  } else {
    alert("Number is not 5-digit");
  }
}
