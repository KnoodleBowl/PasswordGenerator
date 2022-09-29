/** Random password generator
 * Sequence:
 * 1. click "generate password" btn.
 * 2.checkNum() to check if a number was inputted
 * 3. generatePassword() to generate the random password 
 *  using generateRandom() to get from the 4 categories, saved to variable password
 * 4. Goes back to checkNum() and gives the value to user through input tag.
 * Extras
 * 1. Copy to clipboard using copy()
 */
// le = letter; numb = number; pass = password; char = character
const lowerLe = document.getElementById('lower');
const upperLe = document.getElementById('upper');
const numb = document.getElementById('num');
const char = document.getElementById('specialChar');
//input tags, input from password and output to pass
let length = document.getElementById('length');
let pass = document.getElementById('password');
//91 characters
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const numbers = '1234567890';
const specialChar = '~`!@#$%^&*()-_=+[{]}|:;,<.>/?';
//sets up variables to output password
let password = [];
let joinedPass = null;

function randomLower() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
function randomUpper() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
function randomNum() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function randomSpecial() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

function generateRandom() {
  let ran = [];
  lowerLe.checked && ran.push(randomLower());
  upperLe.checked && ran.push(randomUpper());
  numb.checked && ran.push(randomNum());
  char.checked && ran.push(randomSpecial());
  return ran[Math.floor(Math.random() * ran.length)];
}

function generatePassword() {
  let passLength = length.value;
  if(lowerLe.unchecked && upperLe.unchecked && 
    numb.unchecked && char.unchecked) {
    return 0;
  }
  for(let i = 0; i < passLength; i++) {
    password[i] = generateRandom();
  }
  return 0;
}

function checkNum() {
  pass.value = '';
  if(length.value <= 100 && length.value >= 1) {
    password = [];
    joinedPass = '';
    generatePassword();
    joinedPass =  password.join('');
    return pass.value = joinedPass;
  }
  else {
    alert("Please enter a number between 1 and 100.");
    return 0;
  }
}

function copy() {
  const a = async (text) => await navigator.clipboard.writeText(text);
  return a(joinedPass);
}