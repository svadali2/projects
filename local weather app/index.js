var city = "";
$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?')
  .done(function(location) {
    $('#country').html(location.country_name);
    $('#city').html(location.city);
    $('#state').html(location.state);
    city = $('#city').html();
    var picture = '';
    var link = '';

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=e43bbb4c655b29aa9f58390e07e45216&units=imperial').done(function(json) {
  picture = JSON.stringify(json.weather[0].icon);
  link = "http://openweathermap.org/img/w/" + picture + ".png";
  link = link.replace(/"/g, '');
  $('#weather-pic').attr('src', link)
  $('#deets').html(json.main.temp);
})
  });



function fahrenToCel() {
  if ($('#temp').html() == 'C') {
    $('#temp').html('F');
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=e43bbb4c655b29aa9f58390e07e45216&units=imperial').done(function(json) {
      $('#deets').html(json.main.temp);
    });
  } else if ($('#temp').html() == 'F') {
    $('#temp').html('C');
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=e43bbb4c655b29aa9f58390e07e45216&units=metric').done(function(json) {
      $('#deets').html(json.main.temp);
    })
  }
}