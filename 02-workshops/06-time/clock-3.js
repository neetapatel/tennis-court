// Get Hand Elements
// -----------------------------------------------------------
const hoursHand = document.querySelector('.Hand--hours');
const minutesHand = document.querySelector('.Hand--minutes');
const secondsHand = document.querySelector('.Hand--seconds');
console.log(hoursHand, minutesHand, secondsHand);

// Every Second...
// -----------------------------------------------------------
setInterval(() => {

    // Create a new Date object
    const dateObject = new Date();

    // Get hours, minutes, seconds
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();
    console.log(hours, minutes, seconds);

    // Change the document
    hoursHand.style.transform = `rotateZ(${ hours * ( 360 / 24 ) }deg)`;
    minutesHand.style.transform = `rotateZ(${ minutes * ( 360 / 60 ) }deg)`;
    secondsHand.style.transform = `rotateZ(${ seconds * ( 360 / 60 ) }deg)`;
    
}, 1000)