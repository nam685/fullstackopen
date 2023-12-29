

const Persons = ({persons, filter}) => (
  <>
    {persons
      .filter(p => p.name.toLowerCase().includes(filter))
      .map((p, i) => <p key={i}>{p.name} {p.number}</p>)
    }
  </>
)

export default Persons