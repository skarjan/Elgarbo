// Message for users
console.log("Welcome to the Elgarbo beta. Feel free to edit as you wish.")
// for development use remove before PROD
// let testArray = ['a','f','d','z','h'];
//  Copy button
function copyToClipboard(elementId) {
  // Create an auxiliary hidden input
  var aux = document.createElement("input");
  // Get the text from the element passed into the input
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  // Append the aux input to the body
  document.body.appendChild(aux);
  // Highlight the content
  aux.select();
  // Execute the copy command
  document.execCommand("copy");
  // Remove the input from the body
  document.body.removeChild(aux);
} // End of function




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
  let intIndexOfLetter = Math.trunc(floatIndexOfLetter);
  let randomLowerChar = abc[intIndexOfLetter];
  console.log(randomLowerChar);
  return randomLowerChar;
}
// Number numberGenerator
function numberGenerator() {
  const allNums = [0,1,2,3,4,5,6,7,8,9]
  let floatIndexOfLetter = Math.random()*10;
  let intIndexOfLetter = Math.trunc(floatIndexOfLetter);
  let randomNumber = allNums[intIndexOfLetter];
  console.log(randomNumber);
  return randomNumber;
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
  function LoopBothLowAndUpperChar () {
    let upperAndLower = [];
    var count = document.getElementById("demo").innerHTML;
  for (var i = 0; i < count; i++) {
    if (determineUpperOrLower() <= 0.50) {
      upperAndLower[i] = lowerCaseLetterGenerator();
    } else {
      upperAndLower[i] = upperCaseLetterGenerator();
    } displayWord(upperAndLower);
    }
  } // einde functie
  function LoopBothLowAndUpperAndNumbers () {
    let upperAndLowerAndNumbers = [];
    var count = document.getElementById("demo").innerHTML;
  for (var i = 0; i < count; i++) {
    if (determineUpperOrLower() <= 0.34) {
      upperAndLowerAndNumbers[i] = lowerCaseLetterGenerator();
    } else if (determineUpperOrLower() <= 0.67) {
      upperAndLowerAndNumbers[i] = upperCaseLetterGenerator();
    } else {
      upperAndLowerAndNumbers[i] = numberGenerator();
    }
    displayWord(upperAndLowerAndNumbers);
    }
  } // einde functie




// Random uppercase character
function upperCaseLetterGenerator () {
    const ABC =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let floatIndexOfLetter = Math.random()*26;
    let intIndexOfLetter = Math.trunc(floatIndexOfLetter);
    let randomUpperChar = ABC[intIndexOfLetter];
    console.log(randomUpperChar);
    return randomUpperChar;
  }
  // upper and lower character lowerCaseLetter
function determineUpperOrLower () {
  let upperOrLower = Math.random();
    return upperOrLower;
}

// FUN FACTS BY JSON
  // grabbing the IDs of HTML elements that will display the fact
  const header = document.getElementById('ff-title');
  const body = document.getElementById('ff-body');
  // url to json on server
  const jsonLink = "JSON/funfacts.json";
  const jsonLink1 = "JSON/heros.json"
  // new XHR request
  let request = new XMLHttpRequest();
  request.open('GET', jsonLink);

  // Set what kind of response we'll get
  request.responseType = 'json';
  request.send();

  //  wait for actual response
  request.onload = function() {
    const superHeros = request.response;
    // body.innerHTML = superHeros['funFacts'][2]["factContent"];
    console.log("Inside function: " + request.response);
    return request.response;
  }

  //
  function requestListener () {
  console.log(this.response);
}
//
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", requestListener);
// oReq.open("GET", jsonLink);
// oReq.responseType = 'json';
// oReq.send();
