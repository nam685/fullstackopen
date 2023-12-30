import personService from '../services/persons'

const Persons = ({persons, filter, setPersons}) => {
  
  const deletePerson = (id) => {
    /** Expects person with this ID exists in phonebook */
    const name = persons.find(p => p.id === id).name
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .del(id)
        .then(() => {
          personService
            .readAll()
            .then(response => setPersons(response))
        })
    }
  }

  return (
    <>
      {persons
        .filter(p => p.name.toLowerCase().includes(filter))
        .map((p) =>
            <p key={p.id}>{p.name} {p.number} <button onClick={() => deletePerson(p.id)}>delete</button> </p>
        )
      }
    </>
  )
}

export default Persons