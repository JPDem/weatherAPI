const forecasts = () => {
  fetch(apiURLForecast)
    .then(res => res.json())
    .then(dataForecast => {
      dataForecasted(dataForecast);
      forecastIcon(dataForecast);
      clickEventForecast(dataForecast);
    });
};

const forecastIcon = dataForecast => {
  for (let forecastLoop = 0; forecastLoop <= 4; forecastLoop++) {
    const iconHttp = {
      http: "https://openweathermap.org/img/wn/",
      id: dataForecast.list[forecastLoop].weather[0].icon,
      iconType: ".png"
    };

    const { http, id, iconType } = iconHttp;
    const iconURL = `${http}${id}${iconType}`;
    const iconPic = document.querySelector(`.forecast-icon${forecastLoop}`);
    iconPic.src = iconURL;
  }
};

const dataForecasted = dataForecast => {
  for (let forecastLoop = 0; forecastLoop <= 4; forecastLoop++) {
    const forecastTemp = document.querySelector(
      `.forecast-temp${forecastLoop}`
    );
    const forecastTime = document.querySelector(
      `.forecast-time${forecastLoop}`
    );
    const tempCelsius = Math.round(
      dataForecast.list[forecastLoop].main.temp - 273.15
    );

    const weatherIcon = dataForecast.list[forecastLoop].weather[0].icon;
    forecastTemp.textContent = `${tempCelsius}°C`;
    const approxDate = dataForecast.list[forecastLoop].dt_txt;
    const approxEnding = dataForecast.list[forecastLoop + 1].dt_txt;
    const approxTime = approxDate.slice(11, 16);
    forecastTime.textContent = `${approxTime}`;
  }
};

const clickEventForecast = dataForecast => {
  for (let i = 0; i <= 4; i++) {
    weatherTemp.addEventListener("click", () => {
      "use strict";
      const ftemp = document.querySelectorAll(".ftemp");
      ftemp[i].classList.remove("fade-in");
      void ftemp[i].offsetWidth;
      ftemp[i].classList.add("fade-in");
      setTimeout(() => {
        let temp = `${dataForecast.list[i].main.temp - 273.15}`;
        let farenheit = `${Math.round((temp * 9) / 5 + 32)}°F`;
        let tempCelsius = `${Math.round(temp)}°C`;
        const includesF = weatherTemp.textContent.includes("F");

        if (includesF) {
          forecastCelsius[i].textContent = farenheit;
        } else {
          forecastCelsius[i].textContent = `${Math.round(temp)}°C`;
        }
      }, 500);
    });
  }
};
