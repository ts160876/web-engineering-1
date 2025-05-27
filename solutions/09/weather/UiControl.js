"use strict";

//Model for UiControl
export class UiControl {
  constructor() {
    //Create list of locations. At the beginning this is empty
    this.locations = [];

    //Set start locations (i.e. where the map displays at the beginning)
    let startLatitude = 49.4738;
    let startLongitude = 8.5344;

    //Create the map
    this.map = L.map("map", {
      center: [startLatitude, startLongitude],
      zoom: 15,
      doubleClickZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(this.map);

    this.mapClicked = this.mapClicked.bind(this);
    this.map.on("dblclick", this.mapClicked);
  }

  //Method to handle clicks on the map
  mapClicked(event) {
    let location = {
      guid: crypto.randomUUID(),
      latitude: event.latlng.lat,
      longitude: event.latlng.lng,
    };
    this.getLocationName(location).then((location) =>
      this.getWeather(location).then((location) => this.addLocation(location))
    );
  }

  buttonClicked(event) {
    //Determine the index from the ID of the button
    let index = this.locations.findIndex(
      (location) => location.guid == event.target.id
    );
    //Delete the location from the array
    this.locations.splice(index, 1);

    //Adjust the location table in HTML (delete the row)
    document
      .getElementById("locations-body")
      .removeChild(event.target.parentElement.parentElement);
  }

  //Add a location to the existing list of locations
  addLocation(location) {
    //Add the location to the array
    this.locations.push(location);

    //Adjust the location table in HTML
    let tbody = document.getElementById("locations-body");
    //...first add a table
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    //...then add a cell for each value
    //...Address
    let td = document.createElement("td");
    td.textContent = location.address;
    tr.appendChild(td);
    //...Latitude
    td = document.createElement("td");
    td.textContent = location.latitude.toFixed(6);
    tr.appendChild(td);
    //...Longitude
    td = document.createElement("td");
    td.textContent = location.longitude.toFixed(6);
    tr.appendChild(td);
    //...Temperature
    td = document.createElement("td");
    td.textContent = location.temperature + " " + location.temperatureUnit;
    tr.appendChild(td);
    //...Windspeed
    td = document.createElement("td");
    td.textContent = location.windspeed + " " + location.windspeedUnit;
    tr.appendChild(td);
    //...Time
    td = document.createElement("td");
    td.textContent = location.time;
    tr.appendChild(td);
    //...Action
    td = document.createElement("td");
    tr.appendChild(td);
    let button = document.createElement("button");
    button.textContent = "Delete";
    button.id = location.guid;
    this.buttonClicked = this.buttonClicked.bind(this);
    button.addEventListener("click", this.buttonClicked);
    td.appendChild(button);
  }

  //Call to openstreetmap.org:
  //Determine location from latitude and longitude
  async getLocationName(location) {
    const fetchPromise = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${location.latitude}&lon=${location.longitude}&format=json`
    );

    if (fetchPromise.ok == true) {
      const data = await fetchPromise.json();
      if (data.display_name != undefined && data.display_name != "") {
        location.address = data.display_name;
      } else {
        location.address = "Somewhere on the world";
      }
      return location;
    } else {
      //Here we should still add some proper error handling
      return null;
    }
  }

  //Call to open-meteo.com
  //Datermine the weather for a location
  async getWeather(location) {
    const fetchPromise = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`
    );

    if (fetchPromise.ok == true) {
      const data = await fetchPromise.json();
      location.temperature = data.current_weather.temperature;
      location.temperatureUnit = data.current_weather_units.temperature;
      location.windspeed = data.current_weather.windspeed;
      location.windspeedUnit = data.current_weather_units.windspeed;
      location.time = data.current_weather.time;
      return location;
    } else {
      //Here we should still add some proper error handling
      return null;
    }
  }
}
