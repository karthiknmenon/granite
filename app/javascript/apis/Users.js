import axios from 'axios'

const getUsers = () => axios.get('/tasks/new')

const createNewUser = (payload) => axios.post('/users', payload)

const logInUser = (payload) => axios.post('/sessions', payload)

export default { getUsers, createNewUser, logInUser }
