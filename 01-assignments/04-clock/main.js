// ------------------------------------------------------------------------------------------
// Get weather data, call helper functions to set CSS, catch fetch errors.
// ------------------------------------------------------------------------------------------

function weatherBalloon() {

  console.log("calling weatherBalloon();");

  var key = '4268da211f5221feb15b75f72f6a49e7';
  fetch('https://api.openweathermap.org/data/3.0/onecall?lat=41.32&lon=-72.91&appid=bc5c856ae31b746bebc155772859e7d2&units=imperial')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    
    // console.log(data);
    
    // update marquee
    $('#weatherDescriptionSpan').html(data.current.weather[0].description);
    $('#tempSpan').html(Math.round(data.current.feels_like));
    $('#windSpan').html(Math.round(data.current.wind_speed));

    // Set saturation based on 'feels like' temperature now at Wilbur.
    // Mapping: 32F = 0%; 70F = 200%; 90F = 500%;
    getSaturation(data.current.feels_like);

    // Determine if the courts at Wilbur are dark right now, and whether the lights are on.
    getLights(data.current.dt, data.current.sunrise, data.current.sunset);
    
    // If the time is before or after dawn, set colors and transitions accordingly.
    if ((data.current.dt >= (data.current.sunrise-600)) && (data.current.dt <= data.current.sunrise)) {
      console.log("entering dawn");
      dawnColorsIn();
    } else if ((data.current.dt > data.current.sunrise) && (data.current.dt <= (data.current.sunrise+600))) {
      console.log("exiting dawn");
      dawnColorsOut();
    }

    // If the time is before or after dusk, set colors and transitions accordingly.
    if ((data.current.dt >= (data.current.sunset-600)) && (data.current.dt <= data.current.sunset)) {
      console.log("entering dusk");
      duskColorsIn();
    } else if ((data.current.dt > data.current.sunset) && (data.current.dt <= (data.current.sunset+600))) {
      console.log("exiting dusk");
      duskColorsOut();
    }

    // Determine how windy it is at Wilbur, and distort court.
    windy(data.current.wind_speed);

    // Determine if it's rainy at Wilbur, and blur court. 
    rainy(data.minutely[0].precipitation);

  })
  .catch(function() {
    console.log("error"); // catch any errors
  });
}

// ------------------------------------------------------------------------------------------
// HELPER FUNCTIONS 
// ------------------------------------------------------------------------------------------

function dawnColorsIn() {
  $('html').css("background-color", "#ffbbf1");
  $('.court-container > *').css("background-color", "#a1afff");
  $('.court-container').css("background-color", "white");
  $('.court-container').css("border-color", "white");

  $('html').css("transition", "all 60s");
  $('.court-container > *').css("transition", "all 60s");
  $('.court-container').css("transition", "all 60s");
}

// ------------------------------------------------------------------------------------------

function dawnColorsOut() {
  $('html').css("background-color", "#00030b");
  $('.court-container > *').css("background-color", "#6c935c");

  $('html').css("transition", "all 60s");
  $('.court-container > *').css("transition", "all 60s");
  $('.court-container').css("transition", "all 60s");
}

// ------------------------------------------------------------------------------------------

function duskColorsIn() {
  $('html').css("background-color", "#432967");
  $('.court-container > *').css("background-color", "#fc7c47");
  $('.court-container').css("background-color", "white");
  $('.court-container').css("border-color", "white");

  $('html').css("transition", "all 60s");
  $('.court-container > *').css("transition", "all 60s");
  $('.court-container').css("transition", "all 60s");
}

// ------------------------------------------------------------------------------------------

function duskColorsOut() {
  $('html').css("background-color", "#00030b");
  $('.court-container > *').css("background-color", "#6c935c");

  $('html').css("transition", "all 60s");
  $('.court-container > *').css("transition", "all 60s");
  $('.court-container').css("transition", "all 60s");
}

// ------------------------------------------------------------------------------------------

function getTime() {
  date = new Date();
  const options = {timeZone: 'America/New_York', timeZoneName: 'short'};
  time = date.toLocaleTimeString('en-US', options);
  $('#timeSpan').html(time);
}

// ------------------------------------------------------------------------------------------

function convertUnixTime(unixTime) {
  dateObj = new Date(unixTime * 1000);
  return dateObj;
}

// ------------------------------------------------------------------------------------------

function getSaturation(temp) {
  temp = Math.round(temp);
  if (temp <= 32) {
    saturation = 0;
  } 
  if (temp > 32 && temp <= 70) {
    saturation = (temp - 32) * 5.26;
  }
  if (temp > 70) {
    saturation = ((temp - 70) * 15) + 200;
  }
  $('html').css("filter", "saturate(" + saturation + "%)");
  return saturation;
}

// ------------------------------------------------------------------------------------------

function getLights(time, sunrise, sunset) {

  // Retrieve the current hour of the day.
  date = convertUnixTime(time);
  hr = date.getHours();

  if (time > sunset) {
    // If the time is after sunset, the outer court is dark.
    outerCourtDark();
    // And if the time is after 10pm, the inner court is dark.
    if (hr >= 22) {
      innerCourtDark();
    }
  } else if (time < sunrise) {
    // Otherwise, if the time is before sunrise, the entire court is dark.
    outerCourtDark();
    innerCourtDark();
  }

  return;
}

// ------------------------------------------------------------------------------------------

function outerCourtDark() {
  $('html').css("background-color", "#00030b");
}

// ------------------------------------------------------------------------------------------

function innerCourtDark() {
  $('.court-container > *').css("background-color", "#00030b");
  $('.court-container').css("background-color", "#1a1a1a");
  $('.court-container').css("border-color", "#1a1a1a");
  return;
}

// ------------------------------------------------------------------------------------------

function windy(speed) {
  // If wind speed is more than 25 mph, court is flapping in the wind.
  speed = Math.round(speed);
  if (speed >= 25) {
    $('.court-container').css("animation", "2s infinite alternate windy");
  } 
  return;
}

// ------------------------------------------------------------------------------------------

function rainy(mm) {
  mm = Math.round(mm);
  $('.court-container').css('filter', 'blur(' + mm + 'px)');
  return;
}

// ------------------------------------------------------------------------------------------

function setup() {
  weatherBalloon();
  window.setInterval(weatherBalloon, 120000);
  getTime();
  window.setInterval(getTime, 1000);
}

// ------------------------------------------------------------------------------------------

$(document).ready(setup);

// ------------------------------------------------------------------------------------------
// DEMO FUNCTIONS 
// ------------------------------------------------------------------------------------------

function weatherBalloonDemo_1() {
  // Freezing, between dawn and dusk
  $('marquee').html("The weather right now is freezing.");
  getSaturation(34);
}

function weatherBalloonDemo_2() {
  // Very hot, between dawn and dusk
  $('marquee').html("The weather right now is boiling.");
  getSaturation(102);
}

function weatherBalloonDemo_3() {
  // Very hot, and rainy, between dawn and dusk
  $('marquee').html("The weather right now is very hot and rainy.");
  getSaturation(90);
  rainy(4);
}

function weatherBalloonDemo_4() {
  // Moderate temp, but windy, between dawn and dusk
  $('marquee').html("The weather right now cool but windy.");
  getSaturation(65);
  windy(30);
}

function weatherBalloonDemo_5() {
  // Moderate temp, at 9pm
  $('marquee').html("The weather right now is cool, at 9pm.");
  getSaturation(70);
  getLights(1667610000, 1667561195, 1667598227);
}

function weatherBalloonDemo_6() {
  // Cold temp, at 2am
  $('marquee').html("The weather right now is cold, at 2am.");
  getSaturation(40);
  getLights(1667541600, 1667561195, 1667598227);
}

function weatherBalloonDemo_7() {
  // Warm, sunrise, windy, rainy
  $('marquee').html("The weather right now is warm, just after sunrise, and it's windy with a little rain.");
  getSaturation(77);
  getLights(1667561324, 1667561195, 1667598227);
  dawnColorsIn();
  windy(25);
  rainy(2);
}

function weatherBalloonDemo_8() {
  // Cool, entering and exiting sunset
  $('marquee').html("The weather right now is cool, just around sunset.");
  getSaturation(55);
  getLights(1667598344, 1667561195, 1667598227);
  duskColorsIn();
  window.setTimeout(duskColorsOut, 60000);
}