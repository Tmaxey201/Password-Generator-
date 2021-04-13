// Assignment Code
var generateBtn = document.querySelector('#generate');
var random = ""
var newPassword = "";


function generatePassword() { 
    var string = prompt("Enter the number of characters for desired password length between 8 and 128.")

    if (string < 8 || string > 128) {
      alert("The number needs to be between 8 and 128")
    }

    if (string => 8 && string <= 128) {
      lowerCase =confirm("Do you want lower case letters in your password?")
      upperCase =confirm("Do you want upper case letters in your password?")
      numbers =confirm("Do you want numbers in your password?")
     specialChars =confirm("Do you want special characters in your password?")
    }

   
  return 'yourpassword';
}
// Write password to the #password input
function writePassword() {
  console.log('writing password');
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);git