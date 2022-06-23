
var passLen = prompt("How long do you want your password to be?") //Defines how long the password should be
console.log(passLen)
var charSet = "abcdefghijklmnopqrstuvwxyz"
var password = ""
// Math.floor(charSet.length * Math.random()) Random index location logic

for (i = 0; i < passLen; i++) {
  var randIndexLoc = Math.floor(charSet.length * Math.random())
  var character = charSet.slice(randIndexLoc, randIndexLoc + 1)
  password = password.concat(character)
}
console.log(password)

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword() {
//   paramPrompt()
//   return // returns a string of random letters from passParam.charset
// }

// function paramPrompt()
//   passParam = {
//     len: 1, //PLaceholder value of 1
//     charSet: "" , // initializes as empty string
//     lowercase:"abcdefghijklmnopqrstuvwxyz", 
//     uppercase:passParam.lowercase.toUppercase(),
//     numeric: "1234567890",
//     special: !"#$%&'()*+,-./:;<=>?@[/]^_`{|}~",  //do i need to remove some special characters for the sake of the code?

//     // length of at least 8 characters and no more than 128 characters
//     // lowercase, uppercase, numeric, and/or special characters
//   }
//   var length = prompt("How many characters long should the password be?")

//   if (length >= 8 && length <= 128) {
//     passParam.len = length
//   } else {
//     paramPrompt()
//   }
// return passParam

// take a bunch of prompt info
// based on the prompt info, add characters to a string

