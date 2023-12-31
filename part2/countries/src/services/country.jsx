import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const readAll = () => (
  axios
    .get(`${baseUrl}/all`)
    .then(response => response.data)
)

const read = (name) => (
  axios
    .get(`${baseUrl}/name/${name}`)
    .then(response => response.data)
)

export default { readAll, read }