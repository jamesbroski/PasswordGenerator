// Assignment Code
var generateBtn = document.querySelector("#generate");

///MY CODE - create variables
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
var numericCharacters = "0123456789".split("");
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Write password to the #password input
function writePassword(event) {
  event.preventDefault(); ///MY CODE
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//MY CODE
function generatePassword() {
  var userArray = [];
  var successful = "";

  var box1 = prompt(
    "How many characters would you like your password to contain?"
  );

  if (box1 < 8 || box1 > 129) {
    alert(
      "Password length must be at least 8 characters and no more than 128 characters"
    );
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
