// Assignment Code
const generateBtn = document.querySelector("#generate");
const inputPasswordLength =document.getElementById("input-length");
const spanPasswordLength = document.getElementById("span-length-display");

const inputLowercase = document.getElementById("input-lowercase");
const inputUppercase = document.getElementById("input-uppercase");
const inputNumbers = document.getElementById("input-numbers");
const inputSymbols = document.getElementById("input-symbols");

setPasswordLengthSpan();

const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
const uppsercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberSet = "1234567890";
const symbolsSet = "!@#$%^&*()";

function setPasswordLengthSpan(){
// the span password length should be updated

// get the value of input
const PasswordLength = inputPasswordLength.value
console.log(PasswordLength);
// change the text content of span
spanPasswordLength.textContent = PasswordLength;
}


//when i change the slider 
inputPasswordLength.addEventListener('input', function(event){

// the span pw length should be updated
setPasswordLengthSpan();
});

// When I click on the generate button
generateBtn.addEventListener('click', function(event){
  console.log(event);
})
// the page will ask me my password length
const passwordlength = Number(inputPasswordLength.value);
console.log(PasswordLength);

let charset = "";

// the page will ask me if I want to use  (done in html)

// lowercase
const wantsLowercase = inputLowercase.checked;

// uppercase
const wantsUppercase = inputUppercase.checked;

// symbols
const wantsSymbols = inputSymbols.checked;

// numbers 
const wantsNumbers = inputNumbers.checked;

// in my password


// once I have selected all the options
if(wantsLowercase){
  charset = charset + lowercaseSet;
}

// then the app should generate the password based on the options

// loop for passwordLength 
for (let index = 0; index < passwordLength; index++) {

// each time it actions, a random character will be generated
// add random character
let password = ""

for (let index = 0; index < passwordLength; index++) {
  
  
}
// then show the generated password in the textarea 