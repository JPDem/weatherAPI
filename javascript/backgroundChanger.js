const backgroundImage = () => {
  console.log(weatherDesc.textContent);
  const wrapper = document.querySelector(".wrapper");
  if (
    weatherDesc.textContent.includes("RAIN") ||
    weatherDesc.textContent.includes("DRIZZLE")
  ) {
    wrapper.classList.toggle("rain");
  }
  if (weatherDesc.textContent.includes("SUN")) {
    wrapper.classList.toggle("sun");
  }
  if (weatherDesc.textContent.includes("CLOUD")) {
    wrapper.classList.toggle("cloud");
  }
  if (weatherDesc.textContent.includes("SNOW")) {
    wrapper.classList.toggle("snow");
  }
  if (weatherDesc.textContent.includes("CLEAR")) {
    wrapper.classList.toggle("clear");
  }
  if (
    weatherDesc.textContent.includes("MIST") ||
    weatherDesc.textContent.includes("HAZE")
  ) {
    wrapper.classList.toggle("mist");
  }
};
