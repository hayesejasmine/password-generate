// Assignment Code
var generateBtn = document.querySelector("#generate");


var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", "}", "]", "|", "\\", '"', ":", ";", "<", ">", ".", "/", "?", "~", "`"];

var combinedlist = [];

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var randomnumber = Math.random()
  return Math.floor(min*(1 - randomnumber) + randomnumber*max)
}

function getRandomitem(list) {
  return list[randomInt(list.length)]
}

function generatePassword(){
var userInput = window.prompt("How many characters would you like your password to contain?")
var length = parseInt(userInput)

if(isNaN(length)) {
  window.alert("Please choose a number")
  return
}

  if (length < 8 || length > 128) {
    window.alert("The password needs to be between 8 to 128 characters.")
    return
}

var UpperCaseInput = window.confirm("Please confirm if you would like to use uppercase letters in your password");
var LowerCaseInput = window.confirm("Please confirm if you would like to use lowercase letters in your password");
var NumbersInput = window.confirm("Please confirm if you would like to use numbers in your password");
var SpecialCharactersInput = window.confirm("Please confirm if you would like to use speacial characters in your password");


if (UpperCaseInput === true) {
  combinedlist.push(uppercase);
}

if (LowerCaseInput === true) {
  combinedlist.push(lowercase);
}

if (NumbersInput === true) {
  combinedlist.push(numbers);
}

if (SpecialCharactersInput === true) {
  combinedlist.push(specials);
}

var generatedPassword = ""

for (var i = 0; i < length; i++) {
  var randomlist = getRandomitem(combinedlist)
  var randomchar = getRandomitem(randomlist)
  generatedPassword += randomchar
}
return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
