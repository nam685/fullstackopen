import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const person = {
      name: newName,
      number: newNumber,
    }

    if (persons.map(p => p.name === newName).reduce((s,p) => (s || p))) {
      /** alert(`${newName} is already added to phonebook`) */
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = persons.find(p => p.name === newName).id
        personService
          .update(person, id)
          .then(response => {
            setNewName('')
            setNewNumber('')
            setPersons(persons.filter(p => p.id !== id).concat(response))
          })
      }
    } else {
      personService
        .create(person)
        .then(response => {
          setNewName('')
          setNewNumber('')
          setPersons(persons.concat(response))
        })
    }
  }

  useEffect(() => {
    personService
      .readAll()
      .then(response => setPersons(response))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      <h3>add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewNameChange={handleNewNameChange}
        newNumber={newNumber}
        handleNewNumberChange={handleNewNumberChange}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons}
        filter={filter}
        setPersons={setPersons}
      />

    </div>
  )
}

export default App