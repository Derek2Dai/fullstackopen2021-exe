import React, { useState } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [unfilteredpersons, setUnfilteredpersons] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const addPerson = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName))
      alert(`${newName} is already added to phonebook`);
    else {
      const newPersonsArray = unfilteredpersons.concat({
        name: newName,
        number: newNumber,
        key: unfilteredpersons.length + 1,
      });
      setUnfilteredpersons(newPersonsArray);
      if (!(filterName === "")) {
        setPersons(
          newPersonsArray.filter((person) => {
            return person.name.toLowerCase().includes(filterName.toLowerCase());
          })
        );
      } else {
        setPersons(newPersonsArray);
      }
      setNewName("");
      setNewNumber("");
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const stateCollec = {
    name: {
      state: newName,
      stateFunc: handleNameChange,
    },
    number: {
      state: newNumber,
      stateFunc: handleNumberChange,
    },
  };
  const dynamicFilterNameList = (event) => {
    const filterstring = event.target.value.toLowerCase();
    setFilterName(event.target.value);
    if (!(filterstring === "")) {
      const filteredPerson = unfilteredpersons.filter((person) => {
        return person.name.toLowerCase().includes(filterstring);
      });
      setPersons(filteredPerson);
    } else {
      setPersons(unfilteredpersons);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterName={filterName}
        dynamicFilterNameList={dynamicFilterNameList}
      />
      <h3>add a new</h3>
      <PersonForm submitFunc={addPerson} stateCollec={stateCollec} />
      <h2>Name | Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};
export default App;
