const apikey = "aec6af91d331e6ea395723a3ce6b35df";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searcgbtn = document.querySelector(".search button");
const wetherIcon = document.querySelector(".wether-icon");

async function checkwhether(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    
    if (response.status === 404) {
      const errorElement = document.querySelector(".error");
      const wetherElement = document.querySelector(".wether");
      if (errorElement) errorElement.style.display = "block";
      if (wetherElement) wetherElement.style.display = "none";
    } else {
      const data = await response.json();
      
      const cityElement = document.querySelector(".city");
      const tempElement = document.querySelector(".temp");
      const humadityElement = document.querySelector(".humadity");
      const windElement = document.querySelector(".wind");
      
      if (cityElement) cityElement.innerHTML = data.name;
      if (tempElement) tempElement.innerHTML = Math.round(data.main.temp) + "°c";
      if (humadityElement) humadityElement.innerHTML = data.main.humidity + "%";
      if (windElement) windElement.innerHTML = data.wind.speed + " km/h";
      
      if (data.weather[0].main == "clouds") {
        wetherIcon.src = "imgs/clouds.png";
      } else if (data.weather[0].main == "clear") {
        wetherIcon.src = "imgs/sun.png";
      } else if (data.weather[0].main == "Drizzle") {
        wetherIcon.src = "imgs/weather.png";
      } else if (data.weather[0].main == "Rain") {
        wetherIcon.src = "imgs/rain.png";
      } else if (data.weather[0].main == "Mist") {
        wetherIcon.src = "img/foggy.png";
      }
      
      const wetherElement = document.querySelector(".wether");
      const errorElement = document.querySelector(".error");
      if (wetherElement) wetherElement.style.display = "block";
      if (errorElement) errorElement.style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    const errorElement = document.querySelector(".error");
    const wetherElement = document.querySelector(".wether");
    if (errorElement) errorElement.style.display = "block";
    if (wetherElement) wetherElement.style.display = "none";
  }
}

searcgbtn.addEventListener("click", () => {
  checkwhether(searchBox.value);
});
