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

let copyEl = document.getElementById('copyButton');

copyEl.addEventListener('click', showToolTip);
copyEl.addEventListener('mouseleave', hideToolTip);


// tooltop to show on copy
function showToolTip() {
  $('[data-toggle=tooltip]').tooltip('show');
}

// hide tooltip
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
function displayWord (e) {
  let element  = document.getElementById("js-wordElement");
  let arrString = e.toString();
  var result = arrString.replace(/,/g, "");
    element.innerHTML = result;
}
// New random string
function generateString() {
   var length = document.getElementById("myRange").value;
   var result           = '';``
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));

      displayWord(result);
   }
   return result;
}

// console.log(generateString(19));



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
