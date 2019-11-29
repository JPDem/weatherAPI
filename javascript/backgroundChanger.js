const backgroundImage = () => {
  const wrapper = document.querySelector(".wrapper");
  console.log(weatherDesc.textContent);
  if (
    weatherDesc.textContent.includes("rain") ||
    weatherDesc.textContent.includes("drizzle")
  ) {
    wrapper.classList.toggle("rain");
  }
  if (weatherDesc.textContent.includes("sun")) {
    wrapper.classList.toggle("sun");
  }
  if (weatherDesc.textContent.includes("cloud")) {
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
