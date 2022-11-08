
// Define Variable
// ---------------------------------------------
var clickCount = 1;
console.log('clickCount:', clickCount);


// Get DOM Elements
// ---------------------------------------------
var clickDisplay = document.querySelector('.Click-display');
console.log('clickDisplay:', clickDisplay);


// Manipulate DOM
// ---------------------------------------------
clickDisplay.innerText = clickCount;
clickDisplay.style.fontSize = `${ clickCount * 100 }px`;


// Create Functions
// ---------------------------------------------
function increaseClickCount() {
    clickCount += 1;
    clickDisplay.innerText = clickCount;
    clickDisplay.style.fontSize = `${ clickCount * 100 }px`;
    console.log('clickCount :', clickCount);
}


// Event Listeners
// ---------------------------------------------
document.addEventListener('click', increaseClickCount);