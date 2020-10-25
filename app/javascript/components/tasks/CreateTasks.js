import React from 'react'
import Container from '../Container'
const CreateTasks = () => {
    return (
        <Container>
            <form>
                <div>
                    <div>
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Create Tasks
                            </h3>
                            <p className="mt-1 text-sm leading-5 text-gray-500">
                                Prove a Task Title and Descriptio. Et Voila !
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label
                                    for="username"
                                    className="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Username
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                        workcation.com/
                                    </span>
                                    <input
                                        id="username"
                                        className="flex-1 form-input block w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    for="about"
                                    className="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    About
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <textarea
                                        id="about"
                                        rows="3"
                                        className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    ></textarea>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Write a few sentences about yourself.
                                </p>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    for="photo"
                                    className="block text-sm leading-5 font-medium text-gray-700"
                                >
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center">
                                    <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                        <svg
                                            className="h-full w-full text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </span>
                                    <span className="ml-5 rounded-md shadow-sm">
                                        <button
                                            type="button"
                                            className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                                        >
                                            Change
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    for="cover_photo"
                                    className="block text-sm leading-5 font-medium text-gray-700"
                                >
                                    Cover photo
                                </label>
                                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <p className="mt-1 text-sm text-gray-600">
                                            <button
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                                            >
                                                Upload a file
                                            </button>
                                            or drag and drop
                                        </p>
                                        <p className="mt-1 text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
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
