let mymap = L.map('map').setView([43, 143], 6);
L.tileLayer('http://192.168.56.101:8080/styles/mydesign/{z}/{x}/{y}.png').addTo(mymap);