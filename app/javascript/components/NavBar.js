import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <svg
                                height="40"
                                width="100"
                                fill="none"
                                viewBox="0 0 780 317"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M347.597 164.514C356.577 110.324 326.54 80.2869 282.259 80.2869C240.145 80.2869 202.676 107.847 194.315 159.56C185.335 213.44 215.372 243.168 259.963 243.168C268.866 243.168 277.536 241.929 285.82 239.529L294.955 252.767H333.043L314.386 224.665C330.952 211.505 343.107 191.377 347.597 164.514ZM252.222 182.165L265.769 205.467C264.376 205.621 262.982 205.699 261.511 205.699C241.693 205.699 232.713 192.074 237.668 164.514C242.312 135.097 257.795 117.756 280.71 117.756C300.838 117.756 308.58 132.31 304.244 159.56C301.999 172.875 297.664 183.636 291.471 191.377L285.665 182.165H252.222ZM475.273 82.4545L458.242 185.261C456.384 197.028 445.236 205.08 429.134 205.08C413.341 205.08 405.29 197.028 407.148 185.261L424.179 82.4545H381.137L363.796 187.119C357.912 223.349 381.137 242.858 422.941 242.858C464.435 242.858 494.781 223.349 500.665 187.119L518.006 82.4545H475.273ZM581.505 82.4545H538.463L512.142 241H555.184L581.505 82.4545ZM576.202 241H705.64L711.523 206.318H636.586L728.245 106.298L732.271 82.4545H602.833L596.95 117.136H671.887L580.228 217.156L576.202 241Z"
                                    fill="#FFB142"
                                ></path>
                                <path
                                    d="M139.875 129.767V134.267H144.375H221.848L91.125 303.795V187.377V182.877H86.625H9.14812L139.875 13.2132V129.767Z"
                                    fill="#FFB142"
                                    stroke="white"
                                    strokeWidth="9"
                                ></path>
                            </svg>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex">
                                <Link
                                    to="/view-tasks"
                                    className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/create-tasks"
                                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                >
                                    Create
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex items-center">
                            <button
                                className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                aria-label="Notifications"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
