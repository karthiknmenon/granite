import React from 'react'
import classnames from 'classnames'

const ListTasks = ({ tasks }) => {
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tasks.map((object) => (
                <li className="col-span-1 bg-white rounded-lg shadow">
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
                                    {object.title}
                                </h3>
                                <span
                                    className={classnames(
                                        'flex-shrink-0 inline-block px-2 py-0.5 text-xs leading-4 font-medium rounded-full',
                                        {
                                            'text-teal-800 bg-teal-100 ':
                                                object.status === 'active',
                                        },
                                        {
                                            'text-black bg-gray-200':
                                                object.status === 'archived',
                                        }
                                    )}
                                >
                                    {object.status}
                                </span>
                            </div>
                            <p className="mt-1 text-gray-500 text-sm leading-5 truncate">
                                {object.description}
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-gray-200">
                        <div className="-mt-px flex">
                            <div className="w-0 flex-1 flex border-r border-gray-200">
                                <button
                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                    disabled={object.status === 'archived'}
                                >
                                    Update
                                </button>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                                <button
                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                    disabled={object.status === 'archived'}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ListTasks
