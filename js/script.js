// toon woord in html
function displayWord (e) {
  let element  = document.getElementById("js-wordElement");

    element.innerHTML = e;
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

// Loop letters into a word variable
function loopLetters(count) {
var count = 8;
var word = [];
    for (var i = 0; i < count; i++) {
      word[i]= lowerCaseLetterGenerator();
      console.log(word);
      displayWord(word);
    }
}


// Random uppercase character
  function upperCaseLetterGenerator () {
    const ABC =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    floatIndexOfLetter = Math.random()*26;
    IntIndexOfLetter = Math.trunc(floatIndexOfLetter);
    randomLowerChar = abc[IntIndexOfLetter];
    console.log(randomLowerChar);
  }
