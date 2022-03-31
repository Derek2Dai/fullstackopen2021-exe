import axios from "axios";

export function getWeatherData(country) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`
  );
}
