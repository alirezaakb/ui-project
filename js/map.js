var map = L.map('map').setView([33.384629, 47.8133373], 8);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: ''
}).addTo(map);


var map = L.map('map').setView([51.505, -0.09], 13);
var points = [
    {coords: [51.5, -0.09], title: "نقطه 1"},
    {coords: [51.51, -0.1], title: "نقطه 2"},
    {coords: [51.49, -0.08], title: "نقطه 3"}
];

points.forEach(function (point) {
    L.marker(point.coords).addTo(map).bindPopup(point.title);
});