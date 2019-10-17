const backgroundImage = () => {
  console.log(weatherDesc.textContent);
  const wrapper = document.querySelector(".wrapper");
  if (
    weatherDesc.textContent.includes("rain") ||
    weatherDesc.textContent.includes("Drizzle")
  ) {
    wrapper.classList.toggle("rain");
  }
  if (weatherDesc.textContent.includes("sun")) {
    wrapper.classList.toggle("sun");
  }
  if (weatherDesc.textContent.includes("clouds")) {
    wrapper.classList.toggle("cloud");
  }
  if (weatherDesc.textContent.includes("snow")) {
    wrapper.classList.toggle("snow");
  }
  if (weatherDesc.textContent.includes("clear")) {
    wrapper.classList.toggle("clear");
  }
  if (
    weatherDesc.textContent.includes("mist") ||
    weatherDesc.textContent.includes("haze")
  ) {
    wrapper.classList.toggle("mist");
  }
};
