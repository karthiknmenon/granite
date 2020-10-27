import React, { useEffect, useState } from 'react'
import Container from '../Container'
import TaskCard from './TaskCard'
import Modal from '../Modal'
import API from '../../apis/Tasks'
import Form from '../Form'

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [modal, setModal] = useState(false)
    const [taskId, setTaskId] = useState('')
    const [deleteTasks, setDeleteTask] = useState(false)
    const [updateTasks, setUpdateTask] = useState(false)
    const [archiveTasks, setArchiveTasks] = useState(false)

    const LoadTasks = async () => {
        try {
            const response = await API.loadTasks()
            setTasks(response.data.tasks)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        LoadTasks()
    }, [])

    useEffect(() => {
        if (deleteTasks) {
            LoadTasks()
            setDeleteTask(false)
        }
        if (updateTasks) {
            LoadTasks()
            setUpdateTask(false)
        }
        if (archiveTasks) {
            LoadTasks()
            setArchiveTasks(false)
        }
    }, [deleteTasks, updateTasks, archiveTasks])

    if (tasks !== undefined && tasks.length > 0) {
        return (
            <Container>
                <TaskCard
                    tasksList={tasks}
                    setDelete={() => setDeleteTask(true)}
                    setArchive={() => setArchiveTasks(true)}
                    setModal={() => setModal(true)}
                    setTaskId={(id) => setTaskId(id)}
                />
                <Modal
                    open={modal}
                    title="Update Task"
                    closeModal={() => setModal(false)}
                >
                    <Form
                        taskId={taskId}
                        setUpdate={() => setUpdateTask(true)}
                    />
                </Modal>
            </Container>
        )
    } else {
        return (
            <Container>
                <h1 className="text-2xl font-serif font-semibold text-center">
                    You don't seem to have added any tasks yet 🙄
                </h1>
            </Container>
        )
    }
}

export default TaskList
