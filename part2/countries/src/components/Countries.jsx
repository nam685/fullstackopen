import { useState, useEffect } from 'react'

import Weather from "./Weather"
import weatherService from "../services/weather"

const CountryDetail = ({ country, weather }) => (
  <>
    <h2>{country.name.common}</h2>
    <p>capital {country.capital[0]}</p>
    <p>area {country.area}</p>
    <b>languages</b>
    <ul>
      {Object.values(country.languages)
        .map((l, i) => <li key={i}>{l}</li>)}
    </ul>
    <img src={country.flags.png}/>
    <Weather data={weather}/>
  </>
)

const ButtonToggleShow = ({ country, text, toggleShown }) => (
  <button onClick={() => toggleShown(country)}>{text}</button>
)

const Country = ({ country, alone, shown, toggleShown }) => {
  const [weather, setWeather] = useState(null)

  const showDetail = alone || shown[country.name.common]

  useEffect(() => {
    if (showDetail) {
      weatherService
        .get(country)
        .then(weather => {
          setWeather(weather)
        })}
  }, [showDetail, country])

  if (alone) {
      return <CountryDetail country={country} weather={weather}/>
  }
  if (shown[country.name.common]) {
    return (
      <>
        <CountryDetail country={country} weather={weather}/>
        <ButtonToggleShow country={country} text="hide" toggleShown={toggleShown}/>
      </>
    )
  }
  return (
    <p>
      {country.name.common}
      <ButtonToggleShow country={country} text="show" toggleShown={toggleShown}/>
    </p>
  )
}

const Countries = ({ countries, filter, maxLength, shown, setShown }) => {
  if (filter.length === 0) {
    return
  }

  const filtered = countries.filter(c => c.name.common.toLowerCase().includes(filter))

  if (filtered.length > maxLength) {
    return <p>Too many matches, specify another filter</p>
  }

  const toggleShown = (country) => {
    const name = country.name.common
    setShown({...shown, [name]: !shown[name]})
  }

  if (filtered.length === 1) {
    return (
      <Country
        key={1}
        country={filtered[0]}
        alone={true}
      />
    )
  }
  return (
    <>
      {
        filtered.map((c, i) =>
        <Country
          key={i}
          country={c}
          alone={false}
          shown={shown}
          toggleShown={toggleShown}
        />)
      }
    </>
  )
}

export default Countries