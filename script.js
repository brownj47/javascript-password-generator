
// Math.floor(charSet.length * Math.random()) Random index location logic

function gatherInfo(){ // gathers info, except for password length, adds characters to the pool from which our random generator will pull.
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = lowercase.toUpperCase()
  var specialChar = "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~"
  var numChar = "1234567890"
  var charSet = ""
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
  if (charSet === "") { // Send an alert message saying you need to enter a character set, restart function
    alert("You must choose a set of characters to include in your password.")
    charSet = gatherInfo()
  }
  return charSet
}

function askLength() { // Send an alert message saying you need to enter a character number, restart function
  var passLen = (prompt("How long do you want your password to be? It must be between 8 and 128 characters."))
  if (passLen < 8 || passLen > 128 || isNaN(passLen)){
    alert("Your password must be between 8 and 128 characters. Please enter a number between those two values.")
    passLen = askLength()
  }
  return passLen
}

function generatePassword(){ //Call above functions and assemble password, pass it to the writePassword fucntion
  var passLen = askLength()
  var charSet = gatherInfo()
  var passWord = ""

  for (i = 0; i < passLen; i++) { //for loop that adds random characters from the charset variable to a string called password.
    var randIndexLoc = Math.floor(charSet.length * Math.random())
    var character = charSet.slice(randIndexLoc, randIndexLoc + 1)
    passWord = passWord.concat(character)
  }
  return passWord
}



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