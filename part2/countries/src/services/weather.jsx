import axios from 'axios'

const api_key = import.meta.env.VITE_API_KEY

const buildUrl = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
}

const get = (country) => (
  axios
    .get(buildUrl(country.latlng[0], country.latlng[1]))
    .then(response => response.data)
)

export default { get }