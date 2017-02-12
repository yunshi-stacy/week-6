/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */
//define global variables and functions
var appState = {
  'lonkey': undefined,
  'latkey': undefined,
  'defaulturl': 'https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-solar-installations.json',
  'url': undefined,
  'data': undefined,
  'coords': undefined,
  'markers': undefined
};

var resetMap = function() {
  _.each(appState.markers, function(marker, i) {
    map.removeLayer(marker);
  });
  appState.data = undefined;
  appState.markers = undefined;
};

var addDataMarkers = function() {
  resetMap();
  // Filter, clean, and store data
  $.ajax(appState.url)
  .done(function(result) {
    var parsed = JSON.parse(result);
    //filter the coordinates that are NA
    appState.data = _.filter(parsed, function(datum) {
      return (typeof datum[appState.latkey] === 'number') && (typeof datum[appState.lonkey] === 'number');
    });
    console.log(appState.data);
    plotData();
  });
};


var plotData = function() {
  appState.markers = _.map(appState.data, function(datum) {
    return L.marker([datum[appState.latkey],datum[appState.lonkey]]).bindPopup(datum.ADDRESS);
  });
  _.each(appState.markers, function(marker) {
    marker.addTo(map);
  });
};

//setup
$(document).ready(function(){
  $('button').click(function(e) {
    appState.lonkey = $('#lonkey-input').val();
    appState.latkey = $('#latkey-input').val();
    appState.url = $('#url-input').val();

    if (appState.lonkey !== 'LONG_' || appState.lonkey !== 'X') {
      appState.lonkey = 'LONG_';
      $('#lonkey-input').val('LONG_');
    }
    if (appState.latkey !== 'LAT' || appState.lonkey !== 'Y') {
      appState.latkey = 'LAT';
      $('#latkey-input').val('LAT');
    }
    if (appState.url !== appState.defaulturl) {
      appState.url = appState.defaulturl;
      $('#url-input').val(appState.defaulturl);
    }

    var latkey = appState.latkey;
    var lonkey = appState.lonkey;

    addDataMarkers();
  });
});
/* =====================
 Leaflet setup
===================== */

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
