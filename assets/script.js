// 1. Ask the user all questions
// 2. Global variables for all the user params for the password
// 3. We have to get together a list of all allowed characters in the final password
// 4. Combine all teh allowed possible chatacters into a single array (array merging)
  // example array merge: var finalArrary = [...specialCharacters, ...lowerCaseLetters]
// 5. Generate one random character x number of times (for loop) add to string value (var finalPassword)
  // a. Generate a random index vlaue for each of these characters
  // b. Random idx value = 0 to array length - 1

var generateBtn = document.querySelector("#generate");

var numberOfCharacters;
var useNumbers;
var useSpecialCharacters;
var useUpperCase;
var useLowerCase;

var finalPassword = "";

var SpecialCharacters = ["$", "#", "@", "?"];
var numbers = []
var lowerCaseLetters = []
var useUpperCase = []
var allFinalCharacters = []


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
  if (isNaN(length) || length <8 || length > 128) {
    alert("Please enter a valid password length."); 
    return;
  }


  getSpecialCharacters();


}
// Prompt for character types
// Confirms return boolean value
function getSpecialCharacters() {
useSpecialCharacters= confirm ("Do you want to use special characters?")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
