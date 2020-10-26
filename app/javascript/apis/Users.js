import axios from 'axios'

const getUsers = () => axios.get('/tasks/new')

const createNewUser = (payload) => axios.post('/users', payload)

const logInUser = (payload) => axios.post('/sessions', payload)

const LogOutUser = () => axios.delete('/logout')

export default { getUsers, createNewUser, logInUser, LogOutUser }
