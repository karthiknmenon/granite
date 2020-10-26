import React from 'react'
import LogOutSvg from '../../assets/images/logout.svg'
import LogoWhite from '../../assets/images/logo-white.svg'

import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
const NavBar = () => {
    const currentLocation = useLocation()
    const pathName = [
        {
            to: '/view-tasks',
            label: 'Home',
        },
        {
            to: '/create-tasks',
            label: 'Create',
        },
    ]
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img src={LogoWhite} />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex">
                                {pathName.map((navObject, index) => (
                                    <Link
                                        to={navObject.to}
                                        key={index}
                                        className={classnames(
                                            'px-3 py-2 mx-1 rounded-md text-sm font-medium leading-5 text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out',
                                            {
                                                'bg-gray-900':
                                                    currentLocation.pathname ===
                                                    navObject.to,
                                            }
                                        )}
                                    >
                                        {navObject.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex items-center">
                            <button
                                className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                aria-label="Notifications"
                            >
                                <img src={LogOutSvg} className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
