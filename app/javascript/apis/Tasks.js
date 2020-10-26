import axios from 'axios'

const createTask = (payload) => axios.post('/tasks', payload)

const loadTasks = () => axios.get('/tasks')

const deleteTaskById = (id) => axios.delete(`/tasks/${id}`)

const updateTaskById = (id, payload) => axios.patch(`/tasks/${id}`, payload)

const archiveTaskById = (id) => axios.get(`/tasks/archive/${id}`)

export default {
    createTask,
    loadTasks,
    deleteTaskById,
    updateTaskById,
    archiveTaskById,
}
