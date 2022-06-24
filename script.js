
var passLen = prompt("How long do you want your password to be?") //Defines how long the password should be
console.log(passLen)
var charSet = ""
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase()
var specialChar = "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~"
var numChar = "1234567890"
var password = ""
// Math.floor(charSet.length * Math.random()) Random index location logic

if (confirm("If you would like to include lowercase letters, press OK")) { //add lowercase letters to charSet
  charSet = charSet.concat(lowercase)
}
if (confirm("If you would like to include uppercase letters, press OK")) { // add uppercase letters to charSet
  charSet = charSet.concat(uppercase)
}
if (confirm("If you would like to include special characters, press OK")) { // add special characters to charSet
  charSet = charSet.concat(specialChar)
}
if (confirm("If you would like to include numbers, press OK")) { // add numbers characters to charSet
  charSet = charSet.concat(numChar)
}

console.log(charSet)

for (i = 0; i < passLen; i++) { //for loop that adds random characters from the charset variable to a string called password.
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

