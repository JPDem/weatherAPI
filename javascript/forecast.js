const forecasts = () => {
  fetch(apiURLForecast)
    .then(res => res.json())
    .then(dataForecast => {
      dataForecasted(dataForecast);
      forecastIcon(dataForecast);
    });
};

const forecastIcon = dataForecast => {
  for (let forecastLoop = 0; forecastLoop <= 4; forecastLoop++) {
    const iconHttp = {
      http: "http://openweathermap.org/img/wn/",
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
    const forecastDesc = dataForecast.list[forecastLoop].weather[0].description;
    forecastTemp.textContent = `${tempCelsius}°C`;
    weatherDesc.textContent = forecastDesc;
    const approxDate = dataForecast.list[forecastLoop].dt_txt;
    const approxEnding = dataForecast.list[forecastLoop + 1].dt_txt;
    const approxTime = approxDate.slice(11, 16);
    forecastTime.textContent = `${approxTime}`;
  }
};
