// Months and Days
// -----------------------------------------------------------
var months = ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
var days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];


// The Date Object
// -----------------------------------------------------------
var dateObject = new Date();
console.log('%cThe Date Object', 'font-weight: bold');
console.dir(dateObject);


// Hours
// -----------------------------------------------------------
var hours = dateObject.getHours();
hours = hours % 12;
console.log('%c\nHours', 'font-weight: bold');
console.dir(hours);


// Minutes
// -----------------------------------------------------------
var minutes = dateObject.getMinutes();
console.log('%c\nMinutes', 'font-weight: bold');
console.dir(minutes);


// Seconds
// -----------------------------------------------------------
var seconds = dateObject.getSeconds();
console.log('%c\nSeconds', 'font-weight: bold');
console.dir(seconds);


// Milliseconds
// -----------------------------------------------------------
var milliseconds = dateObject.getMilliseconds();
console.log('%c\nMilliseconds', 'font-weight: bold');
console.dir(milliseconds);


// Period
// -----------------------------------------------------------
var period = (hours <= 12) ? 'am' : 'pm';
console.log('%c\nPeriod', 'font-weight: bold');
console.dir(period);


// Year
// -----------------------------------------------------------
var year = dateObject.getFullYear();
console.log('%c\nYear', 'font-weight: bold');
console.dir(year);

// Month
// -----------------------------------------------------------
var monthList = ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
var monthIndex = dateObject.getMonth();
var month = monthList[monthIndex];
console.log('%c\nMonth', 'font-weight: bold');
console.dir(month);

// Month
// -----------------------------------------------------------
var dayList = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];
var dayIndex = dateObject.getDay();
var day = dayList[dayIndex];
console.log('%c\nDay', 'font-weight: bold');
console.dir(day);