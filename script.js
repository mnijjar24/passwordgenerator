// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  writePassword();
}


// Write password to the #password input
function writePassword() {

  var length = prompt("Please choose your password length from 8 to 128 characters.");
  var newlength = parseInt(length);
  if (isNaN(newlength)|| newlength<8 || newlength>128) {
    alert("error");
    return;
  }

  const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphaLower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";

  var useUpperCase = prompt("Would you like to include uppercase letters?  yes/no");
  var useLowerCase = prompt("Would you like to include lowercase letters?  yes/no");
  var useSpecial = prompt("Would you like to include special characters?  yes/no");
  var useNumeric = prompt("Would you like to include numeric characters?  yes/no");

  var pass = ""
  if(useUpperCase==="yes"){
    pass += alphaUpper
  }
  if(useLowerCase==="yes"){
    pass += alphaLower
  }
 if(useSpecial==="yes"){
    pass += symbols
  }
 if(useNumeric==="yes"){
    pass += numbers
  }
  if(useUpperCase==="no" && useLowerCase==="no" && useSpecial==="no" && useNumeric==="no"){
    alert("select atleast one");
  }
var password = ""
 for(var i=0; i < newlength ; i++ )
 {
   console.log(i)
  var character = Math.floor(Math.random()*pass.length);
  console.log(password)
 password += pass[character];
 console.log(pass)
 }
 
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
