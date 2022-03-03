// Assignment Code
const generateBtn = document.querySelector("#generate");
const inputPasswordLength =document.getElementById("input-length");
const spanPasswordLength = document.getElementById("span-length-display");

const inputLowercase = document.getElementById("input-lowercase");
const inputUppercase = document.getElementById("input-uppercase");
const inputNumbers = document.getElementById("input-numbers");
const inputSymbols = document.getElementById("input-symbols");
const textareaPassword = document.getElementById("password");
const divError = document.getElementById("div-error");


function setPasswordLengthSpan(){
// the span password length should be updated

// get the value of input
const PasswordLength = inputPasswordLength.value;
console.log(PasswordLength);
// change the text content of span
spanPasswordLength.textContent = PasswordLength;
}


//when i change the slider 
inputPasswordLength.addEventListener('input', function(event){

// the span pw length should be updated
setPasswordLengthSpan();
});


const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersSet = "1234567890";
const symbolsSet = "!@#$%^&*()";


// When I click on the generate button
generateBtn.addEventListener('click', function(event){
  console.log(event);
})
// the page will ask me my password length
const passwordLength = Number(inputPasswordLength.value);
console.log(passwordLength);


// the page will ask me if I want to use  (done in html)
let charset = "";

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
if (wantsLowercase){
  charset = charset + lowercaseSet;
}
if (wantsUppercase){
  charset = charset + uppercaseSet;
}
if (wantsNumbers){
  charset = charset + numbersSet;
}
if (wantsSymbols){
  charset = charset + symbolsSet;
}


// then the app should generate the password based on the options

let password = "";
console.log(charset);

// loop for passwordLength 
for (let index = 0; index < passwordLength; index++) {

// each time it actions, a random character will be generated
// add random character
const randomIndex = Math.floor(Math.random() * charset.length);
const randomChar = charset[randomIndex];
password = password + randomChar; 
}
// then show the generated password in the textarea
{
textareaPassword.textContent = password;}