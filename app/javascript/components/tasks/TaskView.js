import React, { useState, useEffect } from 'react'
import API from '../../apis/Tasks'
import CommentsAPI from '../../apis/Comments'
import Container from '../Container'

import { useToasts } from 'react-toast-notifications'
import { useParams } from 'react-router-dom'

const TaskView = () => {
    const [taskDetails, setTaskDetails] = useState([])
    const [comments, setComments] = useState([])
    const [content, setContent] = useState('')
    const [newComment, setNewComment] = useState(false)
    let { id } = useParams()
    const { addToast } = useToasts()

    const fetchTaskDetails = async () => {
        try {
            const response = await API.fetchTaskById(id)
            setTaskDetails(response.data.task)
            setComments(response.data.comments)
        } catch (error) {
            console.log(error)
        }
    }

    const submitComment = async () => {
        try {
            const respomse = await CommentsAPI.addCommentToTask(id, {
                content: content,
            })
            addToast('Comment added successfully!', { appearance: 'success' })
            setNewComment(true)
        } catch (error) {
            console.log(error)
            addToast('Something Went Wrong 😐', { appearance: 'error' })
        } finally {
            setContent('')
        }
    }

    useEffect(() => {
        fetchTaskDetails()
    }, [])

    useEffect(() => {
        if (newComment) {
            fetchTaskDetails()
            setNewComment(false)
        }
    }, [newComment])

    return (
        <Container>
            <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {taskDetails.title}
                </h3>
                <p className="max-w-full border-t border-gray-200 py-2 text-sm leading-5 text-gray-500">
                    {taskDetails.description}
                </p>
            </div>
            <div className="sm:col-span-2 mt-3">
                <div className="mt-1 relative rounded-md shadow-sm">
                    <textarea
                        rows="4"
                        className="form-textarea py-3 px-4 block w-full border-1 transition ease-in-out duration-150"
                        placeholder="Enter Comment Here"
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="sm:col-span-2 mt-2">
                <span className="w-full inline-flex rounded-md shadow-sm">
                    <button
                        type="button"
                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 rounded-md text-white focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                        onClick={submitComment}
                    >
                        Add Comment
                    </button>
                </span>
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
                                            key={index}
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
