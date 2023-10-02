// Assignment Code

// Function to generate a random password: 
// Instruction 1
  function generatePassword() {
    // Prompt for password length
  var length = parseInt(prompt("Enter Password Length (at least 8 characters"));
  }

// Validate Length
  if (isNaN(length) || length <8 || length > 128) {
    alert("Please enter a valid password length.");
    return;
  }

// Prompt for character types
// Confirms return boolean value


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
