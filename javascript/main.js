const weatherAPI = () => {
  const apiURL = `${api}${apiCity}${apiID}`;
  fetch(`${api}${apiCity}${apiID}`)
    //convert to json
    .then(res => res.json())
    //generate/use data
    .then(data => {
      generateHtml(data);
      getIcon(data);
      clickEvent(data);
    });
};
const forecasts = () => {
  fetch(apiURLForecast)
    .then(res => res.json())
    .then(data => {
      tempForecast(data);
    });
};

const generateHtml = data => {
  const countryName = document.querySelector("#country-name");
  const desc = `${data.weather[0].description}`;
  const country = `${data.sys.country}`;
  const city = data.name;
  const type = `${data.weather[0].main}`;
  let temp = `${data.main.temp - 273.15}`;
  let farenheit = `${Math.round((temp * 9) / 5 + 32)}°F`;
  let tempCelsius = `${Math.round(temp)}°C`;

  weatherTemp.textContent = tempCelsius;
  weatherDesc.textContent = desc;
  cityName.textContent = city;
  backgroundImage();
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

const fetchData = () => {
  let apiCity = inputSearch.value;
  const apiURL = `${api}${apiCity}${apiID}`;
  fetch(apiURL)
    //convert to json
    .then(res => res.json())
    //generate/use data
    .then(data => {
      generateHtml(data);
      getIcon(data);
      clickEvent(data);
    })
    .catch(error => {
      alert(`${inputSearch.value}is not a city`);
    });
};

const clickEvent = data => {
  tempCelsius = weatherTemp.textContent;
  weatherTemp.addEventListener("click", () => {
    let temp = `${data.main.temp - 273.15}`;
    let farenheit = `${Math.round((temp * 9) / 5 + 32)}°F`;
    let tempCelsius = `${Math.round(temp)}°C`;
    if (weatherTemp.textContent === tempCelsius) {
      weatherTemp.textContent = farenheit;
    } else {
      weatherTemp.textContent = `${Math.round(temp)}°C`;
    }
  });
};
