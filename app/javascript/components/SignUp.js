import React, { useState } from 'react'
import Logo from '../../assets/images/granite.svg'
import API from '../apis/Users'

import { Link, useHistory } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const history = useHistory()
    const { addToast } = useToasts()

    const submitForm = async (e) => {
        e.preventDefault()

        try {
            const response = await API.createNewUser({
                email,
                password,
                password_confirmation,
            })
            console.log(response)
            history.push('/view-tasks')
        } catch (error) {
            console.log(error)
            addToast('Something Went Wrong 😐', { appearance: 'error' })
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="mx-auto h-12 w-auto"></div>
                <img src={Logo} alt="" className="mx-auto h-24 w-auto" />
                <h2 className="mt-3 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Create an account
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                    Or&nbsp;
                    <Link
                        to="/"
                        className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                        Login
                    </Link>
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form>
                        <div>
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    type="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    type="password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                Password Confirmation
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    type="password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    onChange={(e) =>
                                        setPasswordConfirmation(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                    onClick={submitForm}
                                >
                                    Sign Up
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
