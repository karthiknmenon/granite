import axios from 'axios'

const createTask = (payload) => axios.post('/tasks', payload)
const loadTasks = () => axios.get('/tasks')
const deleteTaskById = (id) => axios.delete(`/tasks/${id}`)
export default { createTask, loadTasks, deleteTaskById }
