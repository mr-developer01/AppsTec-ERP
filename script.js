const temperature = document.getElementById('temperature');
const city = document.getElementById('city');

async function getWeatherData(place) {
  const url =
    "https://api.weatherstack.com/current?access_key=c4bd84c2fa4b9bb3aa9fd5964f7ea2f4&query=place";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const data = JSON.parse(result);
    temperature.textContent = `${data.current.temperature}°C`;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getWeatherData("America");