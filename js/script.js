// Message for users
console.log("Welcome to the Elgarbo beta. Feel free to edit as you wish.")
// for development use remove before PROD
let testArray = ['a','f','d','z','h'];

// Slider functionality
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}


// toon woord in html
function displayWord (e) {
  let element  = document.getElementById("js-wordElement");
  let arrString = e.toString();
  var result = arrString.replace(/,/g, "");
    element.innerHTML = result;
}

// Random genration of letters, numbers and symbols
// Lower care generator
function lowerCaseLetterGenerator () {
  const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let floatIndexOfLetter = Math.random()*26;
  let IntIndexOfLetter = Math.trunc(floatIndexOfLetter);
  let randomLowerChar = abc[IntIndexOfLetter];
  console.log(randomLowerChar);
  return randomLowerChar;
}

// Loop letters into a lower case word variable
function loopLowerChars(count) {
var count = document.getElementById("demo").innerHTML;
var word = [];
    for (var i = 0; i < count; i++) {
      word[i]= lowerCaseLetterGenerator();
      console.log(word);
      displayWord(word);
    }
}
function loopUpperChars(count) {
  var count = document.getElementById("demo").innerHTML;
  var word = [];
      for (var i = 0; i < count; i++) {
        word[i]= upperCaseLetterGenerator();
        console.log(word);
        displayWord(word);
      }
  }

// Random uppercase character
function upperCaseLetterGenerator () {
    const ABC =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let floatIndexOfLetter = Math.random()*26;
    let IntIndexOfLetter = Math.trunc(floatIndexOfLetter);
    let randomUpperChar = ABC[IntIndexOfLetter];
    console.log(randomUpperChar);
    return randomUpperChar;
  }
