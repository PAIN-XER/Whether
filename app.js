const apikey = "aec6af91d331e6ea395723a3ce6b35df";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searcgbtn = document.querySelector(".search button");
const wetherIcon = document.querySelector(".wether-icon");

async function checkwhether(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  if (response.status === 404) {
    document.querySelector.apply(".error").style.display = "block";
    document.querySelector.apply(".wether").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humadity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

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

    document.querySelector(".wether").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searcgbtn.addEventListener("click", () => {
  checkwhether(searchBox.value);
});
