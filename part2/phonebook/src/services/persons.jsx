import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const create = newPerson => (
  axios
    .post(baseUrl, newPerson)
    .then(response => response.data)
)

const readAll = () => (
  axios
    .get(baseUrl)
    .then(response => response.data)
)

const del = (i) => (
  axios
    .delete(`${baseUrl}/${i}`)
    .then(response => response.data)
)

const update = (person, i) => (
  axios
    .put(`${baseUrl}/${i}`, person)
    .then(response => response.data)
)

export default { create, readAll, update, del }