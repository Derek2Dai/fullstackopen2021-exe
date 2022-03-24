import React from "react";

const PersonForm = ({ submitFunc, stateCollec }) => {
  return (
    <form onSubmit={submitFunc}>
      <div>
        name:
        <input
          key="name"
          value={stateCollec.name.state}
          onChange={stateCollec.name.stateFunc}
        />
      </div>
      <div>
        number:
        <input
          key="number"
          value={stateCollec.number.state}
          onChange={stateCollec.number.stateFunc}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
