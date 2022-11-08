// Get Elements
// -----------------------------------------------------------
const hoursElement = document.querySelector('.Hours');
const minutesElement = document.querySelector('.Minutes');
const secondsElement = document.querySelector('.Seconds');
console.log(hoursElement, minutesElement, secondsElement);

// Every Second...
// -----------------------------------------------------------
setInterval(() => {

    // Create a new Date object
    const dateObject = new Date();

    // Get hours, minutes, seconds
    const hours = String(dateObject.getHours() % 12).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');
    const seconds = String(dateObject.getSeconds()).padStart(2, '0');
    console.log(hours, minutes, seconds);

    // Change the document
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
    
}, 1000)