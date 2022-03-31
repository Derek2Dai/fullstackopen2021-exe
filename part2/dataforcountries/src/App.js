import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Countrylist from "./components/Countrylist";

const App = () => {
  const [country, setCountry] = useState("");
  const [countryInfoList, setCountryInfoList] = useState([]);
  const [countryListtoShow, setCountryListToShow] = useState([]);

  const countryListhook = () => {
    console.log("effect");
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((Response) => {
        console.log("promise fulfilled!");
        setCountryInfoList(
          Response.data.map((country) => ({
            name: country.name.common,
            capital: country.capital,
            capitalInfo: country.capitalInfo,
            language: country.languages,
            flag: country.flags.png,
          }))
        );
      })
      .catch((err) => console.error(err));
  };
  useEffect(countryListhook, []);

  const countrySearchHandle = (event) => {
    const searchCountryName = event.target.value.toLowerCase();
    setCountry(event.target.value);
    if (!(searchCountryName === "")) {
      const countrySearchedList = countryInfoList.filter((country) => {
        return country.name.toLowerCase().indexOf(searchCountryName) !== -1;
      });
      setCountryListToShow(countrySearchedList);
    } else {
      setCountryListToShow([]);
    }
  };

  return (
    <div>
      <Search
        country={country}
        countryList={countryListtoShow}
        setCountryList={countrySearchHandle}
      />
      {countryListtoShow.length > 10 ? (
        "Too many matches, specify another filter"
      ) : (
        <Countrylist countrylist={countryListtoShow} />
      )}
    </div>
  );
};

export default App;
