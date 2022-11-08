// Get DOM Elements
// ---------------------------------------------
var cursor = document.querySelector('.Cursor');
console.log('cursor:', cursor);

var clickCounter = 0;
var backgroundColors = ['fuchsia', 'orangered', 'blue', 'lime'];

document.addEventListener('mousemove', function(event) {
    cursor.style.top = `${ event.y }px`;
    cursor.style.left = `${ event.x }px`;
    cursor.style.width = `${ event.x / 2 }px`;
    cursor.style.height = `${ event.y / 2 }px`;
});

document.addEventListener('click', function() {
    clickCounter++;
    var color = backgroundColors[clickCounter % backgroundColors.length];
    console.log(clickCounter);
    document.documentElement.style.backgroundColor = color;
});