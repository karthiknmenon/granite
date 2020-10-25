import React from 'react'
import NavBar from './NavBar'
const Container = ({ children }) => {
    return (
        <>
            {' '}
            <NavBar />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-12">
                {children}
            </div>{' '}
        </>
    )
}

export default Container
