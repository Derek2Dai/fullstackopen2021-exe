import React from "react";
const Search = ({ country, countryList, setCountryList }) => {
  return (
    <div>
      find countries
      <input value={country} onChange={setCountryList} />
    </div>
  );
};

export default Search;
