import axios from 'axios'

const createTask = (payload) => axios.post('/tasks', payload)

export default { createTask }
