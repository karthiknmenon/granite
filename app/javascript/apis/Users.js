import axios from 'axios'

const getUsers = () => axios.get('/tasks/new')

export default { getUsers }
