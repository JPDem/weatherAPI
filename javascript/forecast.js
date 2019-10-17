alert("window");
const forecasts = () => {
  alert("in forecasts()");

  fetch(apiURLForecast)
    .then(res => res.json())
    .then(data => {
      alert("in fetch and 2nd then");
      tempForecast(data);
    });
};

const forecastIcon = data => {
  const iconHttp = {
    http: "http://openweathermap.org/img/wn/",
    id: data.list[arrayForecast].weather[0].icon,
    iconType: "@2x.png"
  };

  const { http, id, iconType } = iconHttp;
  const iconURL = `${http}${id}${iconType}`;
  const iconPic = document.querySelector(".icon");
  iconPic.src = iconURL;
};

const clickData = data => {
  const tempCelsius = Math.round(data.list[arrayForecast].main.temp - 273.15);
  const weatherIcon = data.list[arrayForecast].weather[0].icon;
  const forecastDesc = data.list[arrayForecast].weather[0].description;
  weatherTemp.textContent = `${tempCelsius}°C`;
  weatherDesc.textContent = forecastDesc;
  forecastIcon(data);
  const approxDate = data.list[arrayForecast].dt_txt;
  const approxEnding = data.list[arrayForecast + 1].dt_txt;
  const approxTime = approxDate.slice(11, 19);
  const approxEnd = approxEnding.slice(11, 19);
  forecastTime.textContent = `apprx. ${approxTime} - ${approxEnd}`;
};

const tempForecast = data => {
  frwButton.addEventListener("click", () => {
    alert("frwButton");
    if (arrayForecast < 10) {
      alert(arrayForecast);

      arrayForecast++;
      console.log(arrayForecast);
    }
  });

  bkButton.addEventListener("click", () => {
    alert("bkButton");
    if (arrayForecast > 0) {
      arrayForecast--;
      console.log(arrayForecast);
    }
    if (arrayForecast === 0) {
      forecastTime.textContent = "";
    }
  });
};
