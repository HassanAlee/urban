import React from 'react'

const Grid = ({ children }) => {
    return (
        <div className='flex flex-wrap gap-4 justify-center'>
            {children}
        </div>
    )
}

export default Grid