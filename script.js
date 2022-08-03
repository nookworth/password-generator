// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//keep track of the number of characters the user wants
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

function specialChars() {
  var charChoices = "";
  var typeCount = 0;

  if (window.confirm("Would you like lowercase letters?")) {
    window.alert("Your password will include lowercase characters.");
    charChoices.concat("abcdefghijklmnopqrstuvwxyz");
    typeCount += 1;
  } else {
    window.alert("Your password will not include lowercase characters.");
  }

  if (window.confirm("Would you like uppercase letters?")) {
    window.alert("Your password will include uppercase characters.");
    charChoices.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    typeCount += 1;
  } else {
    window.alert("Your password will not include uppercase characters.");
  }

  if (window.confirm("Would you like numeric letters?")) {
    window.alert("Your password will include numeric characters.");
    charChoices.concat("1234567890");
    typeCount += 1;
  } else {
    window.alert("Your password will not include numeric characters.");
  }

  if (window.confirm("Would you like special letters?")) {
    window.alert("Your password will include special characters.");
    charChoices.concat("!@#$%^&*()");
    typeCount += 1;
  } else {
    window.alert("Your password will not include special characters.");
  }

  if (typeCount === 0) {
    window.alert(
      "You chose 0 character types. Your password will be all special characters."
    );
    charChoices.concat("!@#$%^&*()");
  }
  return charChoices;
}

function generatePassword(length, choices) {
  var result = "";
  var characters = choices;
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", charCount);
generateBtn.addEventListener("click", specialChars);
