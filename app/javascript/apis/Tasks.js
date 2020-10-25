import axios from 'axios'

const createTask = (payload) => axios.post('/tasks', payload)
const loadTasks = () => axios.get('/tasks')
export default { createTask, loadTasks }
