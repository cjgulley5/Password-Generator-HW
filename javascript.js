function writePassword() {
    answer = prompt("What is the length of your password?");
    if (answer < 8) {
      alert("Password too short, try again");
      writePassword()
    } else if (answer > 128) {
      alert("Password is too long, try again");
      writePassword()
    } else {
     lcConfirm = confirm("Do you want to use lowercase characters");
     upConfirm = confirm("Do you want to use uppercase characters");
     numConfirm = confirm("Do you want to use numeric characters");
     spConfirm = confirm("Do you want to use special characters");
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    }
  }

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = answer,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
    retVal = "";
  for (i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}