// Assignment code here


// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// var enterNoOfXters = function(){
//   noOfXters = prompt("How many characters would you like your password to be? Select any number from 8 to 128.")
//   if(!noOfXters){
//     alert("The application has been terminated!")
//   }
// }




function generatePassword(){
  var noOfXters = prompt("How many characters would you like your password to be? Select any number from 8 to 128.")
  // if (noOfXters >= 8 && noOfXters <= 128){
  //   prompt("You want " + noOfXters + "-character password")
  // }else if (noOfXters < 8 || noOfXters > 128)
  // {
  //   prompt("You have entered an invalid number! please input a valid number.")
  //   enterNoOfXters();
  // }
  var lowercases = confirm("Press 'OK' if you want lowercase characters. If not, press 'Cancel'. ")
  if(lowercases){
    alert("lowercases selected")
  }else{
    alert("lowercases will not be included.")
  }
  var uppercases = confirm("Press 'OK' if you want uppercase characters. If not, press 'Cancel'. ")
  if(uppercases){
    alert("uppercases selected")
  }else{
    alert("uppercases will not be included.")
  }

  var numbers = confirm("Press 'OK' if you want numbers. If not, press 'Cancel'. ")
  if(numbers){
    alert("numbers selected")
  }else{
    alert("numbers will not be included.")
  }

  var specialXters = confirm("Press 'OK' if you want special characters. If not, press 'Cancel'. ")
  if(specialXters){
    alert("special characters selected")
  }else{
    alert("special characters will not be included.")
  }
  
  // console.log(noOfXters);
  //console.log(lowercases);
}
generatePassword();
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
