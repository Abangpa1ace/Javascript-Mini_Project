"use strict";

window.addEventListener("load", () => {
  let long;
  let lat;
  let locTime = document.querySelector(".location-timezone");
  let tempDeg = document.querySelector(".temp-degree");
  let tempDes = document.querySelector(".temp-description");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      // get Information from 'open weather API'
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3f28f3fa7b078fc07e23f52d60ca2e45`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;

          // Set Dom Elements from API
          tempDeg.textContent = Math.round(temp - 273);
        });
    });
  }
});
