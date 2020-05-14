// INIT STORAGE
const storage = new Storage();

// GET STORED LOCATION DATA
const weatherLocation = storage.getLocationData();

// INIT THE WEATHER OBJECT
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//INIT UI
const ui = new UI();

// GET WEATHER ON DOM LOAD
document.addEventListener("DOMContentLoaded", getWeather);

// CHANGE LOCATION EVENT
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  // CHANGE LOCATIOM
  weather.changeLocation(city, country);

  // SET LOCATION IN LOCAL STORAGE
  storage.setLocationData(city, country);
  // GET AND DISPLAY THE WEATHER
  getWeather();

  // CLOSE MODAL jquery
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather() // this will return a promise since getWeather is async
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
