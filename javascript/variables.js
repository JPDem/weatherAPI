const api = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiCity = "London";
const apiID = "&appid=79dfcc09d86c014594fc4d5b56c793b5";
const forecast = "http://api.openweathermap.org/data/2.5/forecast?q=,";
const apiCountry = "gb";
const apiURLForecast = `${forecast}${apiCity},${apiCountry}${apiID}`;
console.log(apiURLForecast);
const cityName = document.querySelector("#city");
let inputSearch = document.querySelector(".input-search");
