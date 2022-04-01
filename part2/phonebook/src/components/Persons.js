import React from "react";

const Persons = ({ persons, remove }) => {
  return (
    <div>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} {" | "} {person.number + "      "}
          <button onClick={() => remove(person.id)}>DELETE</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
