var map = L.map('map').setView([33.384629, 47.8133373], 8);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: ''
}).addTo(map);

points.forEach(function (point) {
    L.marker(point.coords).addTo(map).bindPopup(point.title);
});