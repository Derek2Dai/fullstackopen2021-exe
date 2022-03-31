import React, { useEffect, useState } from "react";
import { getWeatherData } from "../services/getWeatherData";
import Weather from "./Weather";

const Country = ({ country }) => {
  const [weatherData, setweatherData] = useState({
    temp: "",
    wind: "",
    icon: "",
  });

  useEffect(() => {
    getWeatherData(country).then((res) => {
      const neweatherData = {
        temp: (res.data.main.temp - 273.15).toFixed(2),
        wind: res.data.wind.speed,
        icon:
          "http://openweathermap.org/img/w/" +
          res.data.weather[0].icon +
          ".png",
      };
      setweatherData(neweatherData);
    });
  }, [country]);

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital : {country.capital}</p>
      <h2>languages:</h2>
      <ul>
        {Object.entries(country.language).map((lan) => (
          <li key={lan[0]}>{lan[1]}</li>
        ))}
      </ul>
      <img src={country.flag} alt={"flag of " + country.name} />
      <Weather capital={country.capital} weatherData={weatherData} />
    </div>
  );
};

export default Country;
