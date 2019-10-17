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

// weatherTemp.addEventListener("click", () => {
//   let temp = `${data.main.temp - 273.15}`;
//   let farenheit = `${Math.round((temp * 9) / 5 + 32)}°F`;
//   let tempCelsius = `${Math.round(temp)}°C`;

//   if (weatherTemp.textContent === tempCelsius) {
//     weatherTemp.textContent = farenheit;
//     console.log("weatherTEmp =d celsius");
//     console.log(`${Math.round(temp)}°C`);
//   } else {
//     console.log(data);
//     weatherTemp.textContent = `${Math.round(temp)}°C`;
//     console.log("weatherTEmp =d farenheigt");
//     console.log(weatherTemp.textContent + " is weatherTemp");
//     console.log(`${Math.round(temp)}°C is celsius`);
//     console.log(`${Math.round((temp * 9) / 5 + 32)}°F`);
//   }
// });

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
  // countryName.textContent = country;
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

// const inputCity = () => {
//   let inputSearch = document.querySelector(".input-search");
//   let iconButton = document.querySelector(".icon-button");
//   iconButton.addEventListener("click", () => {
//     fetchData();
//   });
//   inputSearch.addEventListener("keydown", e => {
//     if (e.key === "Enter") {
//       fetchData();
//     }
//   });
// };

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

  const frwButton = document.querySelector(".forward-button");
  const bkButton = document.querySelector(".back-button");
  console.log(arrayForecast, "loggeed");
  frwButton.addEventListener("click", () => {
    alert("frwButtonclicked");
  });
  bkButton.addEventListener("click", () => {
    alert("bkButtonclicked");
  });
};
