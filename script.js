// Assignment Code
var generateBtn = document.querySelector("#generate");

//define variables which will later be used in functions
var passwordLength;
var specialChars;

// Write password to the #password input
function writePassword() {
  passwordLength = charCount();
  specialChars = specialChars();
  var password = generatePassword(passwordLength, specialChars);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// randomly generate a password according to the user's choice of password length and special characters
function generatePassword(length, choices) {
  var result = "";
  var characters = choices;
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//log the number of characters the user wants and ask again if they select a number less than 8 or more than 128
function charCount() {
  var retry = true;
  while (retry === true) {
    var pwdLen = Number(
      window.prompt("Choose a number of characters between 8 and 128")
    );
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("You have chosen an incorrect value, try again.");
    } else {
      retry = false;
    }
  }
  return pwdLen;
}

//keep track of user's choices for which special characters to include and if they choose none, make their password out of all special characters
function specialChars() {
  var charChoices = "";
  var typeCount = 0;

  if (window.confirm("Would you like lowercase letters?")) {
    window.alert("Your password will include lowercase characters.");
    charChoices += "abcdefghijklmnopqrstuvwxyz";
    typeCount += 1;
  } else {
    window.alert("Your password will not include lowercase characters.");
  }

  if (window.confirm("Would you like uppercase letters?")) {
    window.alert("Your password will include uppercase characters.");
    charChoices += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    typeCount += 1;
  } else {
    window.alert("Your password will not include uppercase characters.");
  }

  if (window.confirm("Would you like numeric letters?")) {
    window.alert("Your password will include numeric characters.");
    charChoices += "1234567890";
    typeCount += 1;
  } else {
    window.alert("Your password will not include numeric characters.");
  }

  if (window.confirm("Would you like special letters?")) {
    window.alert("Your password will include special characters.");
    charChoices += "!@#$%^&*()";
    typeCount += 1;
  } else {
    window.alert("Your password will not include special characters.");
  }

  if (typeCount === 0) {
    window.alert(
      "You chose 0 character types. Your password will be all special characters."
    );
    charChoices += "!@#$%^&*()";
  }
  return charChoices;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
