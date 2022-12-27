$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));

  var hour = today.hour();

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

  var btn9 = document.getElementById('btn9');
  var btn10 = document.getElementById('btn10');
  var btn11 = document.getElementById('btn11');
  var btn12 = document.getElementById('btn12');
  var btn13 = document.getElementById('btn13');
  var btn14 = document.getElementById('btn14');
  var btn15 = document.getElementById('btn15');
  var btn16 = document.getElementById('btn16');
  var text9 = document.getElementById('text9');
  var text10 = document.getElementById('text10');
  var text11 = document.getElementById('text11');
  var text12 = document.getElementById('text12');
  var text13 = document.getElementById('text13');
  var text14 = document.getElementById('text14');
  var text15 = document.getElementById('text15');
  var text16 = document.getElementById('text16');

  btn9.addEventListener('click', function(event){
    event.preventDefault;
    var textInput9 = text9.value.trim();
    localStorage.setItem('hour9', JSON.stringify(textInput9));
  })
  var lastHour9 = JSON.parse(localStorage.getItem('hour9'))
  text9.textContent = lastHour9;

  btn10.addEventListener('click', function(event){
    event.preventDefault;
    var textInput10 = text10.value.trim();
    localStorage.setItem('hour10', JSON.stringify(textInput10));
  })
  var lastHour10 = JSON.parse(localStorage.getItem('hour10'))
  text10.textContent = lastHour10;

  btn11.addEventListener('click', function(event){
    event.preventDefault;
    var textInput11 = text11.value.trim();
    localStorage.setItem('hour11', JSON.stringify(textInput11));
  })
  var lastHour11 = JSON.parse(localStorage.getItem('hour11'))
  text11.textContent = lastHour11;

  btn12.addEventListener('click', function(event){
    event.preventDefault;
    var textInput12 = text12.value.trim();
    localStorage.setItem('hour12', JSON.stringify(textInput12));
  })
  var lastHour12 = JSON.parse(localStorage.getItem('hour12'))
  text12.textContent = lastHour12;

  btn13.addEventListener('click', function(event){
    event.preventDefault;
    var textInput13 = text13.value.trim();
    localStorage.setItem('hour13', JSON.stringify(textInput13));
  })
  var lastHour13 = JSON.parse(localStorage.getItem('hour13'))
  text13.textContent = lastHour13;

  btn14.addEventListener('click', function(event){
    event.preventDefault;
    var textInput14 = text14.value.trim();
    localStorage.setItem('hour14', JSON.stringify(textInput14));
  })
  var lastHour14 = JSON.parse(localStorage.getItem('hour14'))
  text14.textContent = lastHour14;

  btn15.addEventListener('click', function(event){
    event.preventDefault;
    var textInput15 = text15.value.trim();
    localStorage.setItem('hour15', JSON.stringify(textInput15));
  })
  var lastHour15 = JSON.parse(localStorage.getItem('hour15'))
  text15.textContent = lastHour15;

  btn16.addEventListener('click', function(event){
    event.preventDefault;
    var textInput16 = text16.value.trim();
    localStorage.setItem('hour16', JSON.stringify(textInput16));
  })
  var lastHour16 = JSON.parse(localStorage.getItem('hour16'))
  text16.textContent = lastHour16;
});
