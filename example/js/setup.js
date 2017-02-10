/* =====================
  Create a variable to store our data
  This is where we will store our markers when they're on the map. This is a global variable that
  we can use throughout our application.
===================== */
var appState = {
  "markers": [L.marker([39.9522, -75.1639])],
  "data": undefined,
  "numericField1": undefined,
  "numericField2": undefined,
  "booleanField": undefined,
  "stringField": undefined
};

/* =====================
  Set up our map
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

/* =====================
  Add our dummy marker to the map
===================== */
_.each(appState.markers, function(marker) { marker.addTo(map); });

