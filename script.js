// Assignment Code
var generateBtn = document.querySelector("#generate");

/* function used to gather information on what the user wants the password to include and
 based off of the combination they choose, dictates which function runs. */
function writePassword() {
  answer = prompt("How many characters would you like your password to be? Must be at least 8 and no longer than 128.");
  if (answer < 8) {
    alert("Password too short, please try again");
    writePassword();
  } else if (answer > 128) {
    alert("Password is too long, please try again");
    writePassword();
  } else {
      var lower = confirm("Would you like lowercase characters?");
      var upper = confirm("Would you like uppercase characters?");
      var number = confirm("Would you like numeric characters?");
      var specChar = confirm("Would you like special characters?");
        // Different combinations of criteria for wich fuction to run.
        if (lower === true && upper === true && number === true && specChar === true) {
          var password = generatePassword();
        } 
        else if (lower === true && upper === true && number === true && specChar === false) {
          var password = generatePassword2();
        } 
        else if (lower ===  true && upper === true && number === false && specChar === false) {
          var password = generatePassword3();
        } 
        else if (lower === true && upper === false && number === false && specChar === false) {
          var password = generatePassword4();
        } 
        else if (lower === false && upper === true && number === false && specChar === false) {
          var password = generatePassword5();
        } 
        else if (lower === false && upper === false && number === true && specChar === false) {
          var password = generatePassword6();
        } 
        else if (lower === false && upper === false && number === false && specChar === true) {
          var password = generatePassword7();
        }
        else if (lower === false && upper === true && number === false && specChar === true) {
          var password = generatePassword8();
        }
        else if (lower === true && upper === false && number === true && specChar === false) {
          var password = generatePassword9();
        }
        else if (lower === true && upper === false && number === false && specChar === true) {
          var password = generatePassword10();
        }
        else if (lower === false && upper === false && number === true && specChar === true) {
          var password = generatePassword11();
        }
        else if (lower === false && upper === true && number === true && specChar === false) {
          var password = generatePassword12();
        }
        else if (lower === true && upper === true && number === false && specChar === true) {
          var password = generatePassword13();
        }
        else if (lower === true && upper === false && number === true && specChar === true) {
          var password = generatePassword14();
        }
        else if (lower === false && upper === true && number === true && specChar === true) {
          var password = generatePassword15();
        }
        else {
          alert("No criteria selected, please try again.");
          writePassword();
        }

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// event listener for generate button
generateBtn.addEventListener("click", writePassword);

// Different functions for each possible combination of answers to the criteria questions.
function generatePassword() {
    length = answer,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generatePassword2() {
    length = answer,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
}

function generatePassword3() {
    length = answer,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
}

function generatePassword4() {
    length = answer,
    charset = "abcdefghijklmnopqrstuvwxyz",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
}

function generatePassword5() {
    length = answer,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generatePassword6() {
    length = answer,
    charset = "0123456789",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generatePassword7() {
    length = answer,
    charset = "!@#$%^&*",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generatePassword8() {
  length = answer,
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*",
  retVal = "";
for (i = 0, n = charset.length; i < length; ++i) {
retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal;
}

function generatePassword9() {
    length = answer,
    charset = "abcdefghijklmnopqrstuvwxyz0123456789",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generatePassword10() {
    length = answer,
    charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generatePassword11() {
    length = answer,
    charset = "0123456789!@#$%^&*",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generatePassword12() {
    length = answer,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generatePassword13() {
    length = answer,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generatePassword14() {
    length = answer,
    charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generatePassword15() {
    length = answer,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}