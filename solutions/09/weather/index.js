"use strict";

//Get the coordinates of the user
let latitude = 49.4738;
let longitude = 8.5344;

navigator.geolocation.getCurrentPosition(
  (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  },
  () => {
    //Default to DHBW Mannheim
    latitude = 49.4738;
    longitude = 8.5344;
  }
);

//Initialize the map
let map = L.map("map", {
  center: [latitude, longitude],
  zoom: 15,
  doubleClickZoom: false,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

map.on("dblclick", onMapClick);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}
