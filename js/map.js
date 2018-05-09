var mymap = L.map('mapid').setView([37.8, -96], 4);
  
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoienBsZWFzYW50IiwiYSI6ImNqY2RtbHJrbDBmaTgyeHBndnFvc2FpamcifQ.Fs2Z0AUdm1ZtM7t5SwYwjw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.light'
}).addTo(mymap);

L.geoJSON(statesData, {
  style: function(feature) {
    switch (feature.properties.ran) {
      case 0: return {
        weight: 2,
        opacity: 1,
        color: '#737373',
        dashArray: '3',
        fillOpacity: 0.7
      };
      case 1: return {
        weight: 2,
        opacity: 1,
        color: '#1aff1a',
        dashArray: '3',
        fillOpacity: 0.7
      };
    }
  }
}).addTo(mymap);