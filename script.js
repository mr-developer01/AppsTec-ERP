const temperature = document.getElementById("temperature");
const cityName = document.getElementById("city-name");
const day = document.getElementById("day");
const time = document.getElementById("time");
// const date = document.getElementById("date");

async function getWeatherData(place) {
  const presentDay = getDay(new Date());
  console.log(presentDay);

  const url = `https://api.weatherstack.com/current?access_key=c4bd84c2fa4b9bb3aa9fd5964f7ea2f4&query=${place}`;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const data = JSON.parse(result);
    temperature.textContent = `${data.current.temperature}°C`;
    cityName.textContent = data.location.name;
    day.textContent = presentDay;
    time.textContent = data.current.observation_time;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getWeatherData("America");

function getDay(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];
  const dayNum = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear().toString().slice(-2);

  return {day, dayNum, month, year}
}

const arr = ["a", "b", "c", "d", "e", "f","a", "b", "c", "d", "e", "f", "a", "f", "f"]
let maxOccurence = "";
const obj = {};
for(let i = 0; i < arr.length; i++) {
  obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  if(maxOccurence === "" || obj[arr[i]] > obj[maxOccurence]){
    maxOccurence = arr[i];
  }
}

console.log(obj, maxOccurence);
