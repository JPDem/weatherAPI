const api = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiCity = "London";
const apiID = "&appid=79dfcc09d86c014594fc4d5b56c793b5";
const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=";
const apiCountry = "GB";
const cityID = 2643743;
const apiURLForecast = `${forecast}${cityID}${apiID}`;
const cityName = document.querySelector("#city");
let inputSearch = document.querySelector(".input-search");
const weatherTemp = document.querySelector(".temp");
const weatherDesc = document.querySelector(".weather-desc");
