var resetMap = function() {
  _.each(myMarkers, function(marker, i) {
    map.removeLayer(marker);
  });
  myMarkers = [];
};

var getAndParseData = function() {
  // Filter, clean, and store data
  $.ajax('https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-crime-snippet.json').done(function(result) {
    var parsed = JSON.parse(result);
    myData = _.chain(parsed).filter(function(datum) {
      return typeof datum.Coordinates !== 'number';
    }).map(function(datum) {
      var latlongStrings = datum.Coordinates.replace('(', '').replace(')', '').replace(',', '').split(' ');
      var latlong = _.map(latlongStrings, function(str) { return parseFloat(str); });
      datum.coords = latlong;
      return datum;
    }).value();
  });
};

var plotData = function() {
  var filterPredicate = function(datum) {
    var condition = true;
    if (numericField1) { condition = condition && numericField1 <= datum.PSA; }
    if (numericField2) { condition = condition && numericField2 >= datum.PSA; }
    if (booleanField) { condition = condition && datum['UCR Code'] === 800; }
    if (stringField) {
      condition = condition && datum['General Crime Category'].toUpperCase().includes(stringField.toUpperCase());
    }
    return condition;
  };

  myMarkers = _.chain(myData)
    .filter(filterPredicate)
    .map(function(datum) {
      var marker = L.marker(datum.coords).bindPopup(datum['General Crime Category']).addTo(map);
      return marker;
    }).value();
};
