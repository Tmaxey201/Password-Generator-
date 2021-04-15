// Assignment Code
var generateBtn = document.querySelector('#generate');
var random = ""
var newPassword = "";




//create a method to retrieve input from user 
function generatePassword () { 
    var string = prompt("Enter the number of characters for desired password length between 8 and 128.");
//presented an alert informing user that they need to input correct parameters
    if (string < 8 || string > 128) {
      alert("The password length needs to be between 8 and 128 characters. Please try again.")
    }
    else {
 //created an if else statement that will "prompt" (with a confirm window) the user to say yes or no to using different characters         
    if (string => 8 && string <= 128) {
      lowerCase =confirm("Do you want lower case letters in your password?")
      upperCase =confirm("Do you want upper case letters in your password?")
      numbers =confirm("Do you want numbers in your password?")
     specialChars =confirm("Do you want special characters in your password?")
    }
//using if else statements to give each variable a string of characters if the user selects character type to add to the password
   if (lowerCase == true) {
       lowCasechars = "abcdefghijklmnopqrstuvwxyz" }
       else {
           lowCasechars = ""
       }
//repeat this if else statement for each character type
       if (upperCase == true) {
        upCasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" }
        else {
            upCasechars =""
        }

        if (numbers == true) {
            nums = "0123456789" }
            else {
                nums =""
            }

            if (specialChars == true) {
                specChars = "!\"#$&'()*+,-./;:<>=?@[]/^_`{}|~" }
                else {
                    specChars =""
                }
//created a variable using concatenation of previous variables to use for the upcoming for loop
                random = (lowCasechars + upCasechars + nums + specChars)
//used a for loop to create the password using the random variable
                for (let i = 0, n = random.length; i < string; ++i) {
                    newPassword += random.charAt(Math.floor(Math.random()*n));
                }
            }  
            return newPassword; 
            } 
  
    

    

  

// Write password to the #password input
function writePassword() {
  console.log('writing password');
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);