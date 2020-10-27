import React, { useState, useEffect } from 'react'
import UsersAPI from '../apis/Users'
import API from '../apis/Tasks'
import Select from 'react-select'
import classnames from 'classnames'
import { useToasts } from 'react-toast-notifications'
const Form = ({ setUpdate, taskId }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [user_id, setUserId] = useState()
    const [submit, setSubmit] = useState(false)
    const [options, setOptions] = useState([])
    const { addToast } = useToasts()

    const updateTask = async (e) => {
        e.preventDefault()
        setSubmit(true)
        try {
            const response = await API.updateTaskById(taskId, {
                title,
                user_id,
                description,
            })
            addToast('Task Updated Successfully', {
                appearance: 'success',
                autoDismiss: true,
            })
        } catch (error) {
            console.log(error)
            addToast('Something Went Wrong 😐', { appearance: 'error' })
        } finally {
            setUpdate()
        }
    }

    const fetchUserDetails = async () => {
        try {
            const response = await UsersAPI.getUsers()
            setOptions(response.data.users)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUserDetails()
    }, [])

    return (
        <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                    Task Title
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                        className="form-input py-3 px-4 border-solid border border-gray-300 block w-full border-1 transition ease-in-out duration-150"
                        placeholder="Enter Task Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>
            <div className="sm:col-span-2">
                <Select
                    options={options}
                    onChange={(e) => setUserId(e.value)}
                    isSearchable
                />
            </div>
            <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                    Task Description
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <textarea
                        rows="4"
                        className="form-textarea py-3 px-4 border-solid border border-gray-300 block w-full border-1 transition ease-in-out duration-150"
                        placeholder="Enter Task Description"
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="sm:col-span-2">
                <span className="w-full inline-flex rounded-md shadow-sm">
                    <button
                        type="button"
                        className={classnames(
                            'w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150',
                            {
                                'bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700':
                                    title.length > 0 && description.length > 0,
                            },
                            {
                                'bg-indigo-200 cursor-not-allowed':
                                    title.length === 0 ||
                                    description.length === 0,
                            }
                        )}
                        disabled={
                            title.length === 0 || description.length === 0
                        }
                        onClick={updateTask}
                    >
                        Update Task !
                    </button>
                </span>
            </div>
        </form>
    )
}

export default Form
