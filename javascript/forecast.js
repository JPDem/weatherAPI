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
  let timing = 5;
  const getTime = () => {
    if (1 == 3) {
      timing = 3;
      console.log(timing);
    } else {
      console.log("else");
      console.log(timing);
    }
  };

  for (var i = 0; i < 11; i++) {
    let timing = new Date().getHours() + (i * 3 + 3);
    if (timing > 24) {
      timing -= 24;
    } else {
      console.log(timing);
    }
    const tempCelsius = Math.round(data.list[i].main.temp - 273.15);
    console.log(` temp:${tempCelsius} 
                  icon:${data.list[i].weather[0].icon}
                  desc:${data.list[i].weather[0].description}
                  time:${timing}`);
  }
  //TO DO LIST
  // remove for loop and add a event listener that + 1 to i
};
