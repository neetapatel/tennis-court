// STRINGS
// ------------------------------------------------------------------------------
console.log('%c\nStrings', 'font-size: large; font-family: sans-serif; text-decoration: underline; color: orange;');

console.log("A string with double quotes.");
console.log('A string with single quotes.');
console.log("A string with \n a line break");
console.log("A string with double quotes.");
console.log('A ' + 'string ' + 'in ' + 'pieces.')
console.log('%cA string with style.', 'color:red;')


// NUMBERS
// ------------------------------------------------------------------------------
console.log('%c\nNumbers', 'font-size: large; font-family: sans-serif; text-decoration: underline; color: orange;');

console.log(100);
console.log(100 + 100); // addition
console.log(100 - 100); // subtraction
console.log(100 * 100); // multiplication
console.log(100 / 100); // division
console.log(100 % 30); // modulo


// STRINGS + NUMBERS
// ------------------------------------------------------------------------------
console.log('%c\nStrings & Numbers', 'font-size: large; font-family: sans-serif; text-decoration: underline; color: orange;');

console.log('100 * 50'); // number in string
console.log('100 * 50', 100 * 50); 
console.log(100 * 50 + '25');
console.log(`333 years ago, the year was ${ 2022 - 333 }`) // template string


// BOOLEANS (on or off)
// ------------------------------------------------------------------------------
console.log('%c\nBooleans', 'font-size: large; font-family: sans-serif; text-decoration: underline; color: orange;');

console.log(true, false);
console.log('3 < 4: ', 3 < 4); // less than
console.log('5 > 10: ', 5 > 10); // greater than
console.log('2 <= 2: ', 2 <= 2); // less than or equal to 
console.log('2 >= 2: ', 2 >= 2); // greater than or equal to
console.log('6 == 3: ', 6 == 3); // equals
console.log("'tomato' != 'vegetable' : ", 'tomato' != 'vegetable') // not equal
console.log('2 > 1 && 2 < 12 :', 2 > 1 && 2 < 12) // AND
console.log('5 > 12 || 6 < 18 :', 5 > 12 || 6 < 18) // OR


// TYPES 
// ------------------------------------------------------------------------------
console.log('%c\nTypes', 'font-size: large; font-family: sans-serif; text-decoration: underline; color: orange;');

console.log("typeof 'tomato' :", typeof 'tomato'); // string
console.log("typeof 12 :", typeof 12); // number
console.log("typeof false :", typeof false) // boolean

// STORING VARIABLES 
// ------------------------------------------------------------------------------
console.log('%c\nStoring Variables', 'font-size: large; font-family: sans-serif; text-decoration: underline; color: orange;');

var myStreetNumber = 1156;
console.log('myStreetNumber :', myStreetNumber);

var neighborStreetNumber = myStreetNumber + 2;
console.log('neighborStreetNumber :', neighborStreetNumber);

// ALTERING VARIABLES 
// ------------------------------------------------------------------------------
console.log('%c\nAltering Variables', 'font-size: large; font-family: sans-serif; text-decoration: underline; color: orange;');

var studentLoanDebt = 800;
console.log('studentLoanDebt :', studentLoanDebt);

studentLoanDebt = studentLoanDebt - 100;
console.log('studentLoanDebt :', studentLoanDebt);

studentLoanDebt -= 100;
console.log('studentLoanDebt :', studentLoanDebt);

studentLoanDebt += 100;
console.log('studentLoanDebt :', studentLoanDebt);

studentLoanDebt++;
console.log('studentLoanDebt :', studentLoanDebt);

studentLoanDebt--;
console.log('studentLoanDebt :', studentLoanDebt);

// IF STATEMENTS 
// ------------------------------------------------------------------------------
console.log('%c\nIf Statements', 'font-size: large; font-family: sans-serif; text-decoration: underline; color: orange;');

var dollarsInPocket = 18;
console.log('dollarsInPocket :', dollarsInPocket);

if (dollarsInPocket - studentLoanDebt > 0.93) {
    console.log('You can get a coffee at Atticus.');
} else {
    console.log('You can have some water.');
}

// ARRAYS
// ------------------------------------------------------------------------------
console.log('%c\nArrays', 'font-size: large; font-family: sans-serif; text-decoration: underline; color: orange;');

var favoriteColors = ['yellowgreen', 'fuchsia', 'gainsboro', 'snow'];
console.log('favoriteColors :', favoriteColors);
console.log('favoriteColors[1] :', favoriteColors[1]);
console.log('favoriteColors.length :', favoriteColors.length);

// OBJECTS
// ------------------------------------------------------------------------------
console.log('%c\nObjects', 'font-size: large; font-family: sans-serif; text-decoration: underline; color: orange;');

var you = {
    firstName: 'Bryant',
    lastName: 'Wells',
    favoriteColors: favoriteColors
}

console.log('you :', you);
console.log('you.firstName :', you.firstName);
// console is an object! whoa.

// FUNCTIONS
// ------------------------------------------------------------------------------
console.log('%c\nFunctions', 'font-size: large; font-family: sans-serif; text-decoration: underline; color: orange;');

function addNumbers(num1, num2) {
    var result = num1 + num2;
    return result;
}

console.log(addNumbers(10,10));
console.log(document);