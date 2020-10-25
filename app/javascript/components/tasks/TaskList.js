import React, { useEffect, useState } from 'react'
import Container from '../Container'
import API from '../../apis/Tasks'

import classnames from 'classnames'
import { useToasts } from 'react-toast-notifications'

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState('yyoyoy')
    const [deleteTasks, setDeleteTask] = useState(false)
    const [description, setDescription] = useState('yyoyoy')
    const { addToast } = useToasts()
    async function LoadTasks() {
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
    }, [deleteTasks])

    const deleteTask = async (taskId) => {
        try {
            const response = await API.deleteTaskById(taskId)
            addToast('Task Deleted Successfully', {
                appearance: 'success',
                autoDismiss: true,
            })
            console.log(response)
        } catch (error) {
            console.log(error)
            addToast('Something Went Wrong 😐', { appearance: 'error' })
        } finally {
            setDeleteTask(true)
        }
    }

    const updateTask = async (taskId) => {
        try {
            const response = await API.updateTaskById(taskId, {
                title,
                description,
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    if (tasks.length > 0) {
        return (
            <Container>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tasks?.map((taskObject, index) => (
                        <li
                            className="col-span-1 bg-white rounded-lg shadow"
                            key={index}
                        >
                            <div className="w-full flex items-center justify-between p-6 space-x-6">
                                <div className="flex-1 truncate">
                                    <div className="flex items-center space-x-3">
                                        <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
                                            {taskObject.title}
                                        </h3>
                                        <span
                                            className={classnames(
                                                'flex-shrink-0 inline-block px-2 py-0.5 text-xs leading-4 font-medium rounded-full',
                                                {
                                                    'text-teal-800 bg-teal-100 ':
                                                        taskObject.status ===
                                                        'active',
                                                },
                                                {
                                                    'text-black bg-gray-200':
                                                        taskObject.status ===
                                                        'archived',
                                                }
                                            )}
                                        >
                                            {taskObject.status}
                                        </span>
                                    </div>
                                    <p className="mt-1 text-gray-500 text-sm leading-5 truncate">
                                        {taskObject.description}
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-gray-200">
                                <div className="-mt-px flex">
                                    <div className="w-0 flex-1 flex border-r border-gray-200">
                                        <button
                                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                            disabled={
                                                taskObject.status === 'archived'
                                            }
                                            onClick={() =>
                                                updateTask(taskObject.id)
                                            }
                                        >
                                            Update
                                        </button>
                                    </div>
                                    <div className="-ml-px w-0 flex-1 flex border-r border-gray-200">
                                        <button
                                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                            disabled={
                                                taskObject.status === 'archived'
                                            }
                                            onClick={() =>
                                                deleteTask(taskObject.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <div className="-ml-px w-0 flex-1 flex">
                                        <button className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
                                            {taskObject.status === 'archived'
                                                ? 'Unarchive'
                                                : 'Archive'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
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
