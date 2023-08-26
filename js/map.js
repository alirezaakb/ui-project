const map = L.map('map').setView([33.483323, 48.3531479], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);


const icon1 = [L.divIcon({
    className: 'circle-icon color-blue',
    iconSize: [16, 16],
}), L.divIcon({
    className: 'circle-icon color-teal',
    iconSize: [16, 16],
}), L.divIcon({
    className: 'circle-icon color-yellow',
    iconSize: [16, 16],
})
];

const markersData = [
    {lat: 33.47778186665187, lng: 48.3533685423198},
    {lat: 33.48608680692008, lng: 48.357779590821416},
    {lat: 33.48324177631973, lng: 48.34646724778116},
];

for (var i = 0; i < markersData.length; i++) {
    var marker = L.marker([markersData[i].lat, markersData[i].lng], {icon: icon1[i]}).addTo(map);
    marker.bindPopup("Marker " + (i + 1));
}