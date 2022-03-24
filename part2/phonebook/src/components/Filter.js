import React from "react";
const Filter = ({ filterName, dynamicFilterNameList }) => {
  return (
    <div>
      filter shown with
      <input value={filterName} onChange={dynamicFilterNameList} />
    </div>
  );
};

export default Filter;
