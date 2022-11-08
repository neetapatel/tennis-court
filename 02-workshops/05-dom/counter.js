
// Define Variable
// ---------------------------------------------
var count = 1;


// Get DOM Elements
// ---------------------------------------------
var counterDisplay = document.querySelector('.Counter-display');
var increaseCountButton = document.querySelector('.Counter-button--increase');
var decreaseCountButton = document.querySelector('.Counter-button--decrease');


// Create Functions
// ---------------------------------------------
function increaseCount() {
    var bead = document.createElement('div');
    bead.classList.add('Counter-bead');
    counterDisplay.appendChild(bead);
}
function decreaseCount() {
    var lastBead = counterDisplay.lastChild;
    counterDisplay.removeChild(lastBead);
}


// Event Listeners
// ---------------------------------------------
increaseCountButton.addEventListener('click', increaseCount);
decreaseCountButton.addEventListener('click', decreaseCount);