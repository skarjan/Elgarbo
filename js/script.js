function displayWord () {
  let letter = lowerCaseLetterGenerator();
  let element  = document.getElementById("js-wordElement");

    console.log(letter);
}

function lowerCaseLetterGenerator () {
  const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  floatIndexOfLetter = Math.random()*26;
  IntIndexOfLetter = Math.trunc(floatIndexOfLetter);
  randomLowerChar = abc[IntIndexOfLetter];
  console.log(randomLowerChar);
}



  function upperCaseLetterGenerator () {
    const ABC =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    floatIndexOfLetter = Math.random()*26;
    IntIndexOfLetter = Math.trunc(floatIndexOfLetter);
    randomLowerChar = abc[IntIndexOfLetter];
    console.log(randomLowerChar);
  }
