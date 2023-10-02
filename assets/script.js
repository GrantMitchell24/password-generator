var generateBtn = document.querySelector("#generate");

var numberOfCharacters;
var useNumbers;
var useSpecialCharacters;
var useUpperCase;
var useLowerCase;

var finalPassword = "";

var SpecialCharacters = ["$", "#", "@", "?"];
var numbers = '0123456789'.split('')
var lowerCaseLetters = 'qwertyuiopasdfghjklzxcvbnm'.split('')
var upperCaseLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('')
var allFinalCharacters = []

// var length;
function askQuestions() {

}

function getAllAllowedCharacters() {

  return "grant123"
}


// Function to generate a random password: 
// Instruction 1
function generatePassword() {
  // Prompt for password length
  var length = parseInt(prompt("Enter Password Length (at least 8 characters"));

  // Validate Length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length.");
    return;
  }


  // getSpecialCharacters();
  return getCharacters(length)

}
// Prompt for character types
// Confirms return boolean value
// function getSpecialCharacters() {
// useSpecialCharacters= confirm ("Do you want to use special characters?")
// }
function getCharacters(lengthEl) {
  useSpecialCharacters = confirm("Do you want to use special characters?")
  useNumbers = confirm("Do you want to use number characters?")
  useUpperCase = confirm("Do you want to use uppercase characters?")
  useLowerCase = confirm("Do you want to use lowercase characters?")

  while (!useSpecialCharacters && !useNumbers && !useUpperCase && !useLowerCase) {
    alert('You need to pick at least 1 type of characters')
    useSpecialCharacters = confirm("Do you want to use special characters?")
    useNumbers = confirm("Do you want to use number characters?")
    useUpperCase = confirm("Do you want to use uppercase characters?")
    useLowerCase = confirm("Do you want to use lowercase characters?")
  }

  if (useSpecialCharacters) {
    //push special chars to allFinalCharacter array
    allFinalCharacters.push(...SpecialCharacters)
  }
  if (useNumbers) {
    //push number chars to allFinalCharacter array
    allFinalCharacters.push(...numbers)

  }
  if (useUpperCase) {
    //push upper chars to allFinalCharacter array
    allFinalCharacters.push(...lowerCaseLetters)

  }
  if (useLowerCase) {
    //push lower chars to allFinalCharacter array
    allFinalCharacters.push(...upperCaseLetters)

  }
  console.log(allFinalCharacters);
  for (var index = 0; index < lengthEl; index++) {
    var randomIndex = Math.floor(Math.random() * allFinalCharacters.length)
    var randomCharacter = allFinalCharacters[randomIndex]
    finalPassword += randomCharacter
    console.log(randomIndex, randomCharacter);

  }
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
