const temperature = document.getElementById("temperature");
const cityName = document.getElementById("city-name");
const day = document.getElementById("day");
const time = document.getElementById("time");
const imgCondition = document.getElementById("img-condition");
// const date = document.getElementById("date");

const key2 = "bf350ef18e5d84b5e057d876b20185c1";


const api2 = `http://api.weatherstack.com/current?access_key=${key2}&query=${"india"}`;
async function getWeatherData() {
  const presentDay = getDay(new Date());
  console.log(presentDay);

  try {
    const data = await fetch(api2);
    const jsonData = await data.json();
    console.log(jsonData);

    temperature.textContent = `${jsonData?.current?.temperature}°C`;
    cityName.textContent = jsonData?.location?.name;
    day.textContent = presentDay?.day;
    time.textContent = jsonData?.current?.observation_time;
    imgCondition.src = jsonData?.current?.weather_icons[0];
  } catch (error) {
    console.error(error)
  }


}

// getWeatherData();

// getWeatherData("America");

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

  return { day, dayNum, month, year };
}

const arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "a",
  "f",
  "f",
];
let maxOccurence = "";
const obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  if (maxOccurence === "" || obj[arr[i]] > obj[maxOccurence]) {
    maxOccurence = arr[i];
  }
}

console.log(obj, maxOccurence);
