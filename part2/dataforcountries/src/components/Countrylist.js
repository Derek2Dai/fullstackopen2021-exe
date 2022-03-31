import React, { useState } from "react";
import Country from "./Country";
const Countrylist = ({ countrylist }) => {
  const [selectedCountry, setselectedCountry] = useState({
    name: "",
    capital: "",
    language: [],
    flag: "",
    capitalInfo: {},
    weatherData: {},
  });

  const showCountry = (event) => {
    event.preventDefault();
    const newselectedCountry = countrylist[event.target.value];
    setselectedCountry(newselectedCountry);
  };

  return (
    <div>
      {countrylist.length !== 1 ? (
        countrylist.map((country, index) => (
          <p key={index}>
            {country.name}{" "}
            <button value={index} onClick={showCountry}>
              show
            </button>
          </p>
        ))
      ) : (
        <Country country={countrylist[0]} />
      )}
      {selectedCountry.name === "" ||
      (selectedCountry.name !== "" && countrylist.length === 1) ? (
        ""
      ) : (
        <Country country={selectedCountry} />
      )}
    </div>
  );
};
export default Countrylist;
