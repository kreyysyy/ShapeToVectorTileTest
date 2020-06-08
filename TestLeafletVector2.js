var map = L.map('map').setView([43, 143], 6);
var openMapTilesLayer = L.vectorGrid.protobuf("http://192.168.56.101:8080/data/Hokkaido/{z}/{x}/{y}.pbf", {
    vectorTileLayerStyles: {
        Hokkaido: {
            fill: true,
            fillColor: 'rgba(168, 255, 187, 1)',
            color: 'rgba(255, 0, 0, 1)'
        }
    }
}).addTo(map);