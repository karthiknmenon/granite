import axios from 'axios'

const addCommentToTask = (id, payload) =>
    axios.post(`/tasks/${id}/comments`, payload)

export default {
    addCommentToTask,
}
