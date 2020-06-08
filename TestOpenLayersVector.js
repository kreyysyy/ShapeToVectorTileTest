olms('map', 'http://192.168.56.101:8080/styles/mydesign/style.json').then(function (map) {
    map.setView(new ol.View({
        center: ol.proj.fromLonLat([143, 43]),
        zoom: 6
    }))
});