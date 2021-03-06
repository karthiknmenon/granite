import React, { useState } from 'react'
import API from '../../apis/Tasks'

import classnames from 'classnames'
import { useToasts } from 'react-toast-notifications'
import { useHistory } from 'react-router-dom'

const TaskCard = ({
    tasksList,
    setDelete,
    setArchive,
    setModal,
    setTaskId,
}) => {
    const { addToast } = useToasts()
    const history = useHistory()
    const deleteTask = async (taskId) => {
        try {
            const response = await API.deleteTaskById(taskId)
            addToast('Task Deleted Successfully', {
                appearance: 'success',
                autoDismiss: true,
            })
        } catch (error) {
            console.log(error)
            if (error.response.status === 403) {
                addToast('Only Creator Can Delete 😈', { appearance: 'error' })
            } else {
                addToast('Something Went Wrong 😐', { appearance: 'error' })
            }
        } finally {
            setDelete()
        }
    }

    const archiveTask = async (taskId) => {
        try {
            const response = await API.archiveTaskById(taskId)
            addToast(response.data.notice, {
                appearance: 'success',
                autoDismiss: true,
            })
        } catch (error) {
            console.log(error)
            addToast('Something Went Wrong 😐', { appearance: 'error' })
        } finally {
            setArchive()
        }
    }

    const getDetailedTaskView = (id) => {
        history.push(`/view-tasks/${id}`)
    }
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tasksList?.map((taskObject, index) => (
                <li
                    className="col-span-1 bg-white rounded-lg cursor-pointer shadow"
                    key={index}
                >
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div
                                className="flex items-center space-x-3"
                                onClick={() =>
                                    getDetailedTaskView(taskObject.id)
                                }
                            >
                                <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
                                    {taskObject.title}
                                </h3>
                                <span
                                    className={classnames(
                                        'flex-shrink-0 inline-block px-2 py-0.5 text-xs leading-4 font-medium rounded-full',
                                        {
                                            'text-teal-800 bg-teal-100 ':
                                                taskObject.status === 'active',
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
                            <p className="mt-1 text-gray-400 text-sm leading-5 truncate">
                                {taskObject.user.name}
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-gray-200">
                        <div className="-mt-px flex">
                            <div className="w-0 flex-1 flex border-r border-gray-200">
                                <button
                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                    disabled={taskObject.status === 'archived'}
                                    onClick={() => {
                                        setModal()
                                        setTaskId(taskObject.id)
                                    }}
                                >
                                    Update
                                </button>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex border-r border-gray-200">
                                <button
                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                    disabled={taskObject.status === 'archived'}
                                    onClick={() => deleteTask(taskObject.id)}
                                >
                                    Delete
                                </button>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                                <button
                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                    onClick={() => archiveTask(taskObject.id)}
                                >
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
    )
}

export default TaskCard
