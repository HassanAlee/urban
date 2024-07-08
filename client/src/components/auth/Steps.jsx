import React from 'react'

const Steps = ({ step }) => {
    return (
        <ul className="steps mx-auto  w-full">
            <li className={`step ${step >= 1 && "step-primary"}`}>Email</li>
            <li className={`step ${step >= 2 && "step-primary"}`}>Profile</li>
            <li className={`step ${step >= 3 && "step-primary"}`}>Address</li>
        </ul>
    )
}

export default Steps