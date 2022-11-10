var generateBtn = document.querySelector("#generate");

var noOfXters;
var passwordPossibilities = "";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialXters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var isUppercase;
var isLowercase;
var isNumbers;
var isSpecialXters;
function generatePassword() {
  //Ask user to input desired number of characters from 8 to 128
  noOfXters = prompt("How many password characters do you want? It must be any number from 8 to 128.");
  //If less than 8 or more than 128, tell user to try again and terminate application.
  if (noOfXters < 8 || noOfXters > 128) {
    alert("You have entered an invalid number. Please input any number from 8 to 128.")
    return;
  }
  //If correct, tell user how many characters he has selected.
  if (noOfXters >= 8 && noOfXters <= 128) {
    alert("You have selected " + noOfXters + "-character password.")
  }

  //ask user to select password criteria
  function passwordCriteria() {
    isUppercase = confirm("Press 'OK' if you want uppercase characters. If not, press 'Cancel'. ")
    isLowercase = confirm("Press 'OK' if you want lowercase characters. If not, press 'Cancel'. ")
    isNumbers = confirm("Press 'OK' if you want numbers. If not, press 'Cancel'. ")
    isSpecialXters = confirm("Press 'OK' if you want special characters. If not, press 'Cancel'.")
  }
  passwordCriteria();

  //tell user to select at least one criteria if he clicked 'cancel' for all criteria options
  while (!isUppercase && !isLowercase && !isNumbers && !isSpecialXters) {
    alert("You have not selected any criteria! Please select at least one.");
    passwordCriteria();
  }

  //generates all possible characters based on criteria selected by user
  if (isUppercase) {
    passwordPossibilities += uppercase;
  }
  if (isLowercase) {
    passwordPossibilities += lowercase;

  }
  if (isNumbers) {
    passwordPossibilities += numbers;
  }
  if (isSpecialXters) {
    passwordPossibilities += specialXters;
  }


  //variable for the final password
  var passwordOutput = "";
  for (var i = 0; i < noOfXters; i++) {
    //generates a random number 
    var randomNumber = Math.floor(Math.random() * passwordPossibilities.length);
    // generates the final password with length being the number of characters selected by user
    passwordOutput += passwordPossibilities[randomNumber];
    console.log(passwordOutput);
  }

  return passwordOutput;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
