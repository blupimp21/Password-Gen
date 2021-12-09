// Assignment Code
// generate password wasnt called here its called
function generatePassword(){
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', ':', ';', '"', '?', '>', '<', '~'];
  var pC = [];

  //1 prompt the user for the password criteria
  howmany = prompt("Choose a password from 8 to 128 Characters");
  if (howmany < 8 || howmany > 128) {
    return "Please pick valid number";
  } else if (isNaN(howmany)) {
    howmany = prompt("enter valid number");
  }
  else {
    alert("password" + howmany + "characters long");
  }

  // provides lowercase
  lower = confirm("Do you want lowercase characters");
  if (lower) {
    alert("will contain lowercase letters");
  }
  else {
    alert("No lower case letters");
  }

  // provides uppercase
  upper = confirm("Would you like upper case letters");
  if (upper) {
    alert("password will contain upper case");
  }
  else {
    alert("password will not contain uppercase letters");
  }

  // provides numbers
  numbers = confirm("Would you like numbers?");
  if (numbers) {
    alert("password will contain numbers");
  }
  else {
    alert("password will not contain numbers");
  }

  //provides special characters
  special = confirm("Would you like special characters?");
  if (special) {
    alert("password will contain special characters");
  }
  else {
    alert("password will not contain special characters");
  }

  if (lower === false && upper === false && numbers === false && special === false){
    return "Need to type in character";
  }

  // put selected characters together to make password
  if (numbers) {
    pC = pC.concat(numbers);
  }

  if (upper) {
    pC = pC.concat(upper);
  }

  if (lower) {
    pC = pC.concat(lower);
  }

  if (special) {
    pC = pC.concat(special);
  }


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}
