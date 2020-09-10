"use strict";

window.addEventListener("load", () => {
  let long;
  let lat;
  let locTime = document.querySelector(".location-timezone");
  let tempDeg = document.querySelector(".temp-degree");
  let tempDes = document.querySelector(".temp-description");
  let degreeSec = document.querySelector(".temperature");
  const degreeSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3f28f3fa7b078fc07e23f52d60ca2e45`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const icon = data.weather[0].main;
          // Set Dom Elements from API
          tempDeg.textContent = Math.round(temp - 273); //Kelvin Temp -> Celsius
          tempDes.textContent = data.weather[0].description;
          locTime.textContent = data.name;

          // Set Icon
          setIcons(icon, document.querySelector(".icon"));

          // Celsius - Farenhiet Formula
          let Farenheit = Math.round(((temp - 273) * 9) / 5 + 32);

          // Change Celsius - Farenheit
          degreeSec.addEventListener("click", () => {
            if (degreeSpan.textContent === "C") {
              tempDeg.textContent = Farenheit;
              degreeSpan.textContent = "F";
            } else {
              tempDeg.textContent = Math.round(temp - 273);
              degreeSpan.textContent = "C";
            }
          });
        });
    });
  }
