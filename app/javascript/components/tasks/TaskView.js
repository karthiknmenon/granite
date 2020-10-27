import React, { useState, useEffect } from 'react'
import API from '../../apis/Tasks'
import Container from '../Container'

import { useParams } from 'react-router-dom'

const TaskView = () => {
    const [comments, setComments] = useState([])
    const [taskDetails, setTaskDetails] = useState([])
    let { id } = useParams()
    const fetchTaskDetails = async () => {
        try {
            const response = await API.fetchTaskById(id)
            setTaskDetails(response.data.task)
            setComments(response.data.comments)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTaskDetails()
    }, [])

    return (
        <Container>
            <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {taskDetails.title}
                </h3>
                <p className="max-w-2xl border-t border-gray-200 py-2 text-sm leading-5 text-gray-500">
                    {taskDetails.description}
                </p>
            </div>
            {typeof comments === 'object' ? (
                <div className="mt-2 border-t border-gray-200 pt-2">
                    <dl>
                        <div className="mt-8 sm:grid sm:mt-5 sm:pt-2">
                            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                <ul className="border border-gray-200 rounded-md">
                                    {comments.map((comment, index) => (
                                        <li
                                            className="pl-3 pr-4 py-3 border-t border-gray-200 flex items-center justify-between text-sm leading-5"
                                            id={index}
                                        >
                                            <div className="w-0 flex-1 flex items-center">
                                                <span className="ml-2 flex-1 w-0 truncate">
                                                    {comment.content}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            ) : (
                <h3 className="text-lg border-t border-gray-200 py-2 leading-6 font-medium text-gray-900">
                    No Comments 😣
                </h3>
            )}
        </Container>
    )
}

export default TaskView
