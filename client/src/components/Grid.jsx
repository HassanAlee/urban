import React from 'react'

const Grid = ({ children, className }) => {
    return (
        <div className={`flex flex-wrap gap-4 justify-center ${className}`}>
            {children}
        </div>
    )
}

export default Grid