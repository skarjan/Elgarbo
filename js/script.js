// Message for users
console.log("Welcome to the Elgarbo beta. Feel free to edit as you wish.")
// for development use remove before PROD
// DEBUG:
function trace(message) {
  let traceOn = falsex;
  if (traceOn) {
    return console.log(message);
  }
}


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

let copyEl = document.getElementById('copyButton');

// even listeners and functions for the copy button
copyEl.addEventListener('click', showToolTip);
copyEl.addEventListener('mouseleave', hideToolTip);


let lockImg = document.getElementById("lock");
let sliderDiv = document.getElementById("myRange");

sliderDiv.addEventListener('click', checkSliderValue);

lockImg.addEventListener('animationend', removeAnimation);

function removeAnimation() {
  lockImg.classList.remove("animate__animated", "animate__wobble");
  console.log("removeAnimation wordt gevuurd")
}

function addAnimation() {
  lockImg.classList.add("animate__animated", "animate__wobble");
}
//  Wall of code that adds a lock with color related to its security
function checkSliderValue() {
  let sliderValue = document.getElementById("myRange").value;

  if (sliderValue > 7 && sliderValue < 10) {
    console.log(sliderValue + " is meer dan 7 en minder dan 10");
    lockImg.style.fill = "black";
    lockImg.classList.add("animate__animated", "animate__wobble");
  } else if (sliderValue > 9 && sliderValue < 12) {
    lockImg.style.fill = "green";
    lockImg.classList.add("animate__animated", "animate__wobble");
    console.log(sliderValue + " is meer dan 9")
  } else if (sliderValue > 11 && sliderValue < 14) {
    lockImg.style.fill = "blue";
    lockImg.classList.add("animate__animated", "animate__wobble");
    console.log(sliderValue + " is meer dan 11")
  } else if (sliderValue > 13 && sliderValue < 16) {
    lockImg.style.fill = "purple";
    lockImg.classList.add("animate__animated", "animate__wobble");
    console.log(sliderValue + " is meer dan 13")
  } else if (sliderValue > 15) {
    lockImg.style.fill = "gold";
    lockImg.classList.add("animate__animated", "animate__wobble");
    console.log(sliderValue + " is meer dan 15")
  } else {
    console.log(sliderValue + " is minder dan 7");

  }
}

////////////////////
// DOM ready functions //
//////////////////

// prevent flash of unstyled content (FOUC)
function displayBody() {
  document.body.hidden = false;
}

function enableLinkElementsOnReady() {

  let linkElementArr = document.getElementsByTagName('link');

  for (var i = 0; i < linkElementArr.length; i++) {
    trace(linkElementArr[i].disabled);
    if (linkElementArr[i].disabled) {
      linkElementArr[i].disabled = false;
    }
  }



}

function showToolTip() {
  $('[data-toggle=tooltip]').tooltip('show');
}

function hideToolTip() {
  $('[data-toggle=tooltip]').tooltip('dispose');
}

// Slider functionality
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}



// toon woord in html
function displayWord(e) {
  let element = document.getElementById("js-wordElement");
  let arrString = e.toString();
  var result = arrString.replace(/,/g, "");
  element.innerHTML = result;
}
// New random string
function generateString() {
  var length = document.getElementById("myRange").value;
  var result = '';
  ``
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));

    displayWord(result);
  }
  addAnimation();
  return result;
}


// joke API
var jsonResponse = {};
var jokeDescription = "";
var jokeQuestion = "";
var jokeAnswer = "";

function get_joke_of_the_day() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Access the result here
      var joke = xhttp.responseText;
      jsonResponse = JSON.parse(joke);
      jokeDescription = jsonResponse.contents.jokes[0].description;
      jokeQuestion = jsonResponse.contents.jokes[0].joke.title;
      jokeAnswer = jsonResponse.contents.jokes[0].joke.text;
      // jokeQuestion = jokeQuestion.substr(3);
      // jokeAnswer = jokeAnswer.substr(3);
      let jokeQuestionContainer = document.getElementById('jokeQuestion');
      let jokeAnswerContainer = document.getElementById('jokeAnswer');

      jokeQuestionContainer.innerHTML = jokeQuestion;
      jokeAnswerContainer.innerHTML = jokeAnswer;
      trace(jsonResponse);
    }
  };
  xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
  xhttp.send();
}

get_joke_of_the_day();
