const forecasts = () => {
  fetch(apiURLForecast)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      tempForecast(data);
    });
};

//temperature icon time desc
//generate temperatures up to 10
const tempForecast = data => {
  const frwButton = document.querySelector(".forward-button");
  const bkButton = document.querySelector(".back-button");

  // for (i = 0; i < 11; i++) {
  //   let timing = new Date().getHours() + (i * 3 + 3);
  //   if (timing > 24) {
  //     timing -= 24;
  //   } else {
  //     console.log(timing);
  //   }
  //   const tempCelsius = Math.round(data.list[i].main.temp - 273.15);
  //   console.log(` temp:${tempCelsius}
  //                 icon:${data.list[i].weather[0].icon}
  //                 desc:${data.list[i].weather[0].description}
  //                 time:${timing}`);
  // }
  console.log(arrayForecast);

  console.log(arrayForecast, "loggeed");
  frwButton.addEventListener("touchstart", () => {
    if (arrayForecast < 10) {
      clickData(data);
      arrayForecast++;
      console.log(arrayForecast);
    }
  });
  bkButton.addEventListener("touchstart", () => {
    if (arrayForecast > 0) {
      clickData(data);
      arrayForecast--;
      console.log(arrayForecast);
    }
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
  const forecastTime = document.querySelector(".forecast-time");
  weatherTemp.textContent = `${tempCelsius}°C`;
  weatherDesc.textContent = forecastDesc;
  forecastIcon(data);
  const approxDate = data.list[arrayForecast].dt_txt;
  const approxEnding = data.list[arrayForecast + 1].dt_txt;
  const approxTime = approxDate.slice(11, 19);
  const approxEnd = approxEnding.slice(11, 19);
  forecastTime.textContent = `apprx. ${approxTime} - ${approxEnd}`;
};
