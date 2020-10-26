import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
const NavBar = () => {
    const currentLocation = useLocation()
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <svg
                                width="100"
                                height="100"
                                viewBox="0 0 229 87"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M47.136 44.2H50.544V57.016C48.976 58.392 47.12 59.448 44.976 60.184C42.832 60.92 40.576 61.288 38.208 61.288C34.848 61.288 31.824 60.552 29.136 59.08C26.448 57.608 24.336 55.576 22.8 52.984C21.264 50.36 20.496 47.432 20.496 44.2C20.496 40.968 21.264 38.056 22.8 35.464C24.336 32.84 26.448 30.792 29.136 29.32C31.824 27.848 34.864 27.112 38.256 27.112C40.816 27.112 43.168 27.528 45.312 28.36C47.456 29.16 49.264 30.36 50.736 31.96L48.528 34.216C45.872 31.592 42.496 30.28 38.4 30.28C35.68 30.28 33.216 30.888 31.008 32.104C28.832 33.288 27.12 34.952 25.872 37.096C24.624 39.208 24 41.576 24 44.2C24 46.824 24.624 49.192 25.872 51.304C27.12 53.416 28.832 55.08 31.008 56.296C33.184 57.512 35.632 58.12 38.352 58.12C41.808 58.12 44.736 57.256 47.136 55.528V44.2ZM79.221 61L71.541 50.2C70.677 50.296 69.781 50.344 68.853 50.344H59.829V61H56.277V27.4H68.853C73.141 27.4 76.501 28.424 78.933 30.472C81.365 32.52 82.581 35.336 82.581 38.92C82.581 41.544 81.909 43.768 80.565 45.592C79.253 47.384 77.365 48.68 74.901 49.48L83.109 61H79.221ZM68.757 47.32C72.085 47.32 74.629 46.584 76.389 45.112C78.149 43.64 79.029 41.576 79.029 38.92C79.029 36.2 78.149 34.12 76.389 32.68C74.629 31.208 72.085 30.472 68.757 30.472H59.829V47.32H68.757ZM107.717 52.024H88.9965L84.9645 61H81.2685L96.6285 27.4H100.133L115.493 61H111.749L107.717 52.024ZM106.421 49.144L98.3565 31.096L90.2925 49.144H106.421ZM144.811 27.4V61H141.883L120.283 33.736V61H116.731V27.4H119.659L141.307 54.664V27.4H144.811ZM151.458 27.4H155.01V61H151.458V27.4ZM168.15 30.472H156.342V27.4H183.51V30.472H171.702V61H168.15V30.472ZM208.625 57.928V61H184.865V27.4H207.905V30.472H188.417V42.424H205.793V45.448H188.417V57.928H208.625Z"
                                    fill="white"
                                />
                                <rect
                                    x="1"
                                    y="1"
                                    width="227"
                                    height="85"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex">
                                <Link
                                    to="/view-tasks"
                                    className={classnames(
                                        'px-3 py-2 rounded-md text-sm font-medium leading-5 text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out',
                                        {
                                            'bg-gray-900':
                                                currentLocation.pathname ===
                                                '/view-tasks',
                                        }
                                    )}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/create-tasks"
                                    className={classnames(
                                        'ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out',
                                        {
                                            'bg-gray-900':
                                                currentLocation.pathname ===
                                                '/create-tasks',
                                        }
                                    )}
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
