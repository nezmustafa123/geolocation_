const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(showPosition); //callback position
});

function showPosition(position) {
  //callbpack function that takes in position
  userLocation.innerHTML = `Latitude: ${position.coords.latitude} <br>
  Longitude: ${position.coords.longitude}`;
}
