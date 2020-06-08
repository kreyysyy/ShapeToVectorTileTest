var map = L.map('map').setView([43, 143], 6);
var gl = L.mapboxGL({
    style: 'http://192.168.56.101:8080/styles/mydesign/style.json'
}).addTo(map);