const weatherAPI = () => {
  fetch(`${api}${apiCity}${apiID}`)
    //convert to json
    .then(res => res.json())
    //generate/use data
    .then(data => {
      generateHtml(data);
      getIcon(data);
    });
};

const generateHtml = data => {
  console.log(data);
  const cityName = document.querySelector("#city");
  const countryName = document.querySelector("#country-name");
  const weatherDesc = document.querySelector(".weather-desc");
  const weatherTemp = document.querySelector(".temp");
  const weatherType = document.querySelector(".weather-type");
  const desc = `${data.weather[0].description.toUpperCase()}`;
  const country = `${data.sys.country}`;
  const city = data.name;
  const temp = `${data.main.temp - 273.15}`;
  let tempCelsius = `${Math.round(temp)}°C`;
  const type = `${data.weather[0].main}`;
  if (apiURL) {
    weatherTemp.addEventListener("click", () => {
      changeTemp(weatherTemp, temp, tempCelsius);
    });
    weatherTemp.textContent = tempCelsius;
    weatherDesc.textContent = desc;
    cityName.append(city);
    countryName.textContent = country;
    weatherType.textContent = type;
  }
};

const getIcon = data => {
  const iconHttp = {
    http: "http://openweathermap.org/img/wn/",
    id: data.weather[0].icon,
    iconType: "@2x.png"
  };

  const { http, id, iconType } = iconHttp;
  const iconURL = `${http}${id}${iconType}`;
  const iconPic = document.querySelector(".icon");
  iconPic.src = iconURL;
};

const constantTime = () => {
  const setTime = () => {
    const currentDate = new Date();
    let secondsRatio = currentDate.getSeconds();
    let minutesRatio = currentDate.getMinutes();
    let hoursRatio = currentDate.getHours();
    const timeNumber = document.querySelector(".time");

    if (currentDate.getSeconds() < 10) {
      secondsRatio = `0${secondsRatio}`;
    }

    if (currentDate.getMinutes() < 10) {
      minutesRatio = `0${minutesRatio}`;
    }

    if (currentDate.getHours() < 10) {
      hoursRatio = `0${hoursRatio}`;
    }
    const totalTime = `${hoursRatio}:${minutesRatio}:${secondsRatio}`;
    timeNumber.textContent = totalTime;
  };
  setInterval(setTime, 1000);
  setTime();
};
const changeTemp = (weatherTemp, temp, tempCelsius) => {
  if (weatherTemp.textContent === `${Math.round(temp)}°C`) {
    let tempCelsius = `${Math.round((temp * 9) / 5 + 32)}°F`;
    weatherTemp.textContent = tempCelsius;
  } else {
    let tempCelsius = `${Math.round(temp)}°C`;
    weatherTemp.textContent = tempCelsius;
  }
};

const inputCity = () => {
  let inputSearch = document.querySelector(".input-search");
  let iconButton = document.querySelector(".icon-button");
  iconButton.addEventListener("click", () => {
    let apiCity = inputSearch.toString();
  });
};
