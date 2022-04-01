import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import phonebookservice from "./services/phonebook";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [unfilteredpersons, setUnfilteredpersons] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const effectHook = () => {
    phonebookservice.getAll().then((data) => {
      setPersons(data);
      setUnfilteredpersons(data);
    });
  };
  useEffect(effectHook, []);
  const addPerson = (event) => {
    event.preventDefault();
    if (unfilteredpersons.find((person) => person.name === newName)) {
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with ${newNumber} ?`
      );
      if (result) {
        const oldPerson = unfilteredpersons.filter(
          (person) => person.name === newName
        )[0];
        const updatePerson = { ...oldPerson, number: newNumber };
        phonebookservice
          .update(updatePerson.id, updatePerson)
          .then((response) => {
            setUnfilteredpersons(
              unfilteredpersons.map((person) =>
                person.id !== updatePerson.id ? person : response
              )
            );
            if (persons.find((person) => person.id === updatePerson.id))
              setPersons(
                persons.map((person) =>
                  person.id !== updatePerson.id ? person : response
                )
              );
            setNewName("");
            setNewNumber("");
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: unfilteredpersons.length + 1,
      };
      phonebookservice.create(newPerson).then((response) => {
        const newPersonsArray = unfilteredpersons.concat(response);
        setUnfilteredpersons(newPersonsArray);
        if (!(filterName === "")) {
          setPersons(
            newPersonsArray.filter((person) => {
              return person.name
                .toLowerCase()
                .includes(filterName.toLowerCase());
            })
          );
        } else {
          setPersons(newPersonsArray);
        }
        setNewName("");
        setNewNumber("");
      });
    }
  };
  const removePerson = (id) => {
    const result = window.confirm(
      `do you really want to delete ${
        persons.filter((person) => person.id === id)[0].name
      }`
    );
    if (result) {
      phonebookservice.remove(id).then(() => {
        setUnfilteredpersons(
          unfilteredpersons.filter((person) => person.id !== id)
        );
        setPersons(persons.filter((person) => person.id !== id));
      });
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
      <Persons persons={persons} remove={removePerson} />
    </div>
  );
};
export default App;
