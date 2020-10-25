import React, { useState } from 'react'
import Container from '../Container'
import API from '../../apis/Tasks'

import classnames from 'classnames'
import { useToasts } from 'react-toast-notifications'

const CreateTasks = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [submit, setSubmit] = useState(false)
    const { addToast } = useToasts()
    const submitTask = async (e) => {
        e.preventDefault()
        setSubmit(true)
        try {
            const response = await API.createTask({ title, description })
            console.log(response)
            addToast('Task Created Successfully', { appearance: 'success' })
        } catch (error) {
            console.log(error)
            addToast('Something Went Wrong 😐', { appearance: 'success' })
        } finally {
            setSubmit(false)
        }
    }
    return (
        <Container>
            <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            Create A Task
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            A Title and Description and you're good to go
                        </p>
                    </div>
                    <div className="mt-12">
                        <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium leading-5 text-gray-700">
                                    Task Title
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                                        placeholder="Enter Task Title"
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium leading-5 text-gray-700">
                                    Task Description
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <textarea
                                        rows="4"
                                        className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"
                                        placeholder="Enter Task Description"
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
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
                                                    title.length > 0 &&
                                                    description.length > 0,
                                            },
                                            {
                                                'bg-indigo-200 cursor-not-allowed':
                                                    title.length === 0 ||
                                                    description.length === 0,
                                            }
                                        )}
                                        disabled={
                                            title.length === 0 ||
                                            description.length === 0
                                        }
                                        onClick={submitTask}
                                    >
                                        {submit ? (
                                            <svg
                                                className="animate-spin h-5 w-5 mr-3"
                                                viewBox="0 0 24 24"
                                            ></svg>
                                        ) : (
                                            'Create Task !'
                                        )}
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CreateTasks
