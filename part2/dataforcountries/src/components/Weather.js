import React from "react";
const Weather = ({ capital, weatherData }) => {
  return (
    <div>
      <h1>Weather in {capital}</h1>
      <img src={weatherData.icon} alt="xxx" />
      <p>temperature {weatherData.temp} Celsius</p>
    </div>
  );
};

export default Weather;
