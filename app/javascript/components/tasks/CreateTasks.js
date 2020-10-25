import React, { useState } from 'react'
import Container from '../Container'
import API from '../../apis/Tasks'

const CreateTasks = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const submitTask = async (e) => {
        e.preventDefault()
        console.log(`${title} -----------> ${description}`)
        try {
            const response = await API.createTask({ title, description })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>
            <form>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Profile
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                    This information will be displayed publicly so be careful
                    what you share.
                </p>
                <div className="mt-6 sm:mt-5">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                            Title
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <div className="max-w-lg flex rounded-md shadow-sm">
                                <input
                                    className="flex-1 form-input block w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                            Description
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <div className="max-w-lg flex rounded-md shadow-sm">
                                <textarea
                                    rows="3"
                                    className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                ></textarea>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                                Write a task description
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-5">
                    <div className="flex justify-end">
                        <span className="inline-flex rounded-md shadow-sm">
                            <button
                                type="button"
                                className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                            >
                                Cancel
                            </button>
                        </span>
                        <span className="ml-3 inline-flex rounded-md shadow-sm">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                onClick={submitTask}
                            >
                                Save
                            </button>
                        </span>
                    </div>
                </div>
            </form>
        </Container>
    )
}

export default CreateTasks
