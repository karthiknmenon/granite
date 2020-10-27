import React, { useState, useEffect } from 'react'
import API from '../../apis/Comments'

import classnames from 'classnames'
const Comment = () => {
    const [comment, setComment] = useState('')
    const [newComment, setNewComment] = useState(false)

    return (
        <>
            <div className="sm:col-span-2 mt-3">
                <div className="mt-1 relative rounded-md shadow-sm">
                    <textarea
                        rows="4"
                        className="form-textarea py-3 px-4 block w-full border-1 transition ease-in-out duration-150"
                        placeholder="Enter Comment Here"
                        onChange={(e) => setComment(e.target.value)}
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
        </>
    )
}

export default Comment
