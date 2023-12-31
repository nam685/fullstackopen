import { useState, useEffect } from 'react'

import Find from './components/Find'
import Countries from './components/Countries'
import countryService from './services/country'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [shown, setShown] = useState({})

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    countryService
      .readAll()
      .then(countries => {
        setCountries(countries)
        setShown(Object.fromEntries(countries.map(c => [c.name.common, false])))
      })
  }, [])

  return (
    <>
      <Find
        country={filter}
        handleFilterChange={handleFilterChange}
      />
      <Countries
        countries={countries}
        filter={filter}
        maxLength={10}
        shown={shown}
        setShown={setShown}
      />
    </>
  )
}

export default App
