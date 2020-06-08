var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://192.168.56.101:8080/styles/mydesign/{z}/{x}/{y}.png'
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([143, 43]),
        zoom: 6
    })
});