//Assignment code
var generateBtn = document.querySelector("#generate");

//special characters
const specChar1 = "!@#$%^&*()_+:><~";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

//#password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//promtps client what choices are available
function generatePassword() {
    var pwL = prompt("Pick a number between 8 and 128 for your password");
     if (!pwL || pwL < 8 || pwL > 128) {
         window.alert ("Invalid Length");
     }

    var num = confirm("Would you like numbers in your pw?");
    var lowCase = confirm("Would you like lowercase in your pw?");
    var upCase = confirm("Would you like uppercase in your pw?");
    var specChar = confirm("Would you like special characters in your pw?");


//min counter
var minCount = 0;

//empty for var
var minNum = "";
var minLowCase = "";
var minUpCase = "";
var minSpecChar = "";

//functions generator
var functionArray = {
    getNum: function () {
        return String.fromCharCode(Math.floor(Math.random() * 48 + 57));
    },
    getLowCase: function () {
        return String.fromCharCode(Math.floor(Math.random() * 98 + 122));
    },
    getUpCase: function () {
        return String.fromCharCode(Math.floor(Math.random() * 65 + 90));
    },
    getSpecChar: function () {
        return String.fromCharCode(Math.floor(Math.random() * 33 + 46));
    }
};

// client selection checked
if (num === true){
    minNum = functionArray.getNum();
    minCount++;
}

if (lowCase === true){
    minLowCase = functionArray.getLowCase();
    minCount++;
}

if (upCase === true){
    minUpCase = functionArray.getUpCase();
    minCount++;
}

if (specChar === true){
    minSpecChar = functionArray.getSpecChar();
    minCount++;
}

//loop for string
var rPG = "";

// loop cont for retrieving random
for (let i = 0; i < (parseInt(pwL) - minCount); i++){
    var rNP = Math.floor(Math.random() * 4);

    rPG += rNP;
}

//input char in pw
rPG += minNum;
rPG += minLowCase;
rPG += minUpCase;
rPG += minSpecChar;

return rPG;

}