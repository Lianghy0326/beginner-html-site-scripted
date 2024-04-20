// Image switcher code
let myImage = document.querySelector('img');

// Define an array of image sources
let imageArray = [
  'images/firefox-icon.png', 
  'images/firefox2.png',
  'images/img01.jpg',
  'images/img02.jpg',
];
// image index cuurently displayed
let imageIndex = 0;
// image switcher code
myImage.onclick = function() {
  imageIndex = (imageIndex + 1) % imageArray.length;
  myImage.setAttribute('src', imageArray[imageIndex]);
}

// Personalized welcome message code
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// setting the user's name function
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    displayWelcomeMessage(myName);
  }
}


// function to display the welcome message
function displayWelcomeMessage(name) {
  // Get the current date and time
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();

  // Determine the appropriate greeting based on the time of day
  let greeting = '';
  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  // Update the heading with the personalized greeting, current time, and date
  myHeading.innerHTML = `${greeting}, ${name}! It's currently ${currentHour}:${currentMinute < 10 ? '0' + currentMinute : currentMinute}.`;
}

// function to increment visitor counter
function incrementCounter() {
  let visitorCounter = localStorage.getItem('visitorCount');
  if (!visitorCounter) {
    visitorCounter = 0;
  }
  else {
    visitorCounter = parseInt(visitorCounter);
  }
  localStorage.setItem('visitorCount', visitorCounter + 1);
}
// function to display the visitor counter
function displayCounter() {
  let visitorCount = localStorage.getItem('visitorCount');
  if (visitorCount){
    alert(`You are visitor number ${visitorCount}!`);
  }
  else {
    alert('Welcome! you are the first visitor to this site');
  }
}

// Check if the name data exists
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

// Set and display the welcome message when the button is clicked
myButton.onclick = function() {
  setUserName();
  incrementCounter();
  displayCounter();
}