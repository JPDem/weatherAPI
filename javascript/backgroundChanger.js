const includesRain = () => {
  console.log(weatherDesc.textContent);
  const wrapper = document.querySelector(".wrapper");
  if (
    weatherDesc.textContent.includes("RAIN") ||
    weatherDesc.textContent.includes("DRIZZLE")
  ) {
    wrapper.classList.toggle("rain");
  }
  if (weatherDesc.textContent.includes("SUN")) {
    wrapper.classList.toggle("rain");
  }
  if (weatherDesc.textContent.includes("CLOUD")) {
    wrapper.classList.toggle("rain");
  }
  if (weatherDesc.textContent.includes("SNOW")) {
    wrapper.classList.toggle("rain");
  }
  if (weatherDesc.textContent.includes("CLEAR")) {
    wrapper.classList.toggle("rain");
  }
};
