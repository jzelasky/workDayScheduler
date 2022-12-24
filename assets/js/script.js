// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));

  var hour = today.hour();
  console.log(hour);

  var hour9 = $('#hour-9');
  if (hour === 9){
    hour9.addClass('present');
  } else if (hour > 9){
    hour9.addClass('past');
  } else {
    hour9.addClass('future');
  }

  var hour10 = $('#hour-10');
  if (hour === 10){
    hour10.addClass('present');
  } else if (hour > 10){
    hour10.addClass('past');
  } else {
    hour10.addClass('future');
  }

  var hour11 = $('#hour-11');
  if (hour === 11){
    hour11.addClass('present');
  } else if (hour > 11){
    hour11.addClass('past');
  } else {
    hour11.addClass('future');
  }

  var hour12 = $('#hour-12');
  if (hour === 12){
    hour12.addClass('present');
  } else if (hour > 12){
    hour12.addClass('past');
  } else {
    hour12.addClass('future');
  }

  var hour13 = $('#hour-13');
  if (hour === 13){
    hour13.addClass('present');
  } else if (hour > 13){
    hour13.addClass('past');
  } else {
    hour13.addClass('future');
  }

  var hour14 = $('#hour-14');
  if (hour === 14){
    hour14.addClass('present');
  } else if (hour > 14){
    hour14.addClass('past');
  } else {
    hour14.addClass('future');
  }

  var hour15 = $('#hour-15');
  if (hour === 15){
    hour15.addClass('present');
  } else if (hour > 15){
    hour15.addClass('past');
  } else {
    hour15.addClass('future');
  }

  var hour16 = $('#hour-16');
  if (hour === 16){
    hour16.addClass('present');
  } else if (hour > 16){
    hour16.addClass('past');
  } else {
    hour16.addClass('future');
  }
});
