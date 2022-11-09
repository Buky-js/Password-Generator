// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
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
  //If less than 8 or more than 128, tell customer to try again and terminate application.
  if (noOfXters < 8 || noOfXters > 128) {
    alert("You have entered an invalid number. Please input any number from 8 to 128.")
    return;
  }
  //If correct, tell customer how many xters are requested.
  if (noOfXters >= 8 && noOfXters <= 128) {
    alert("You have selected " + noOfXters + "-character password.")
  }

function passwordCriteria(){
  isUppercase = confirm("Press 'OK' if you want uppercase characters. If not, press 'Cancel'. ")
  isLowercase = confirm("Press 'OK' if you want lowercase characters. If not, press 'Cancel'. ")
  isNumbers = confirm("Press 'OK' if you want numbers. If not, press 'Cancel'. ")
  isSpecialXters = confirm("Press 'OK' if you want special characters. If not, press 'Cancel'.")
}
passwordCriteria();

while(!isUppercase && !isLowercase && !isNumbers && !isSpecialXters){
  alert("You need to select at least one password criteria");
  passwordCriteria();
}

  if(isUppercase){
passwordPossibilities += uppercase;
  }
  if(isLowercase){
    passwordPossibilities += lowercase;

  }
  if(isNumbers){
    passwordPossibilities += numbers;
  }
  if(isSpecialXters){
    passwordPossibilities += specialXters;
  }
  // return passwordPossibilities;

//pick random values
var random = "";
for(var i=0; i<noOfXters; i++){
   random+= passwordPossibilities[Math.floor(Math.random() * passwordPossibilities.length)];
  console.log(random);
}
return random;
}
 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
