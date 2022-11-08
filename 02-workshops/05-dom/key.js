// Get DOM Elements
// ---------------------------------------------
var keyDisplay = document.querySelector('.Key-display');

// Create Functions
// ---------------------------------------------
function activateDisplay(event) {
    if (!event.repeat) {
        if (event.keyCode == 32) {
            keyDisplay.classList.add('is-active');
        }
    }    
}
function deactivateDisplay(event) {
    if (!event.repeat) {
        if (event.keyCode == 32) {
            keyDisplay.classList.remove('is-active');
        }
    }
}

// Event Listeners
// ---------------------------------------------
document.addEventListener('keydown', activateDisplay);
document.addEventListener('keyup', deactivateDisplay);