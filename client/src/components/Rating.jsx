import React from 'react'

const Rating = () => {
    return (
        <div className="rating rating-lg rating-half">
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
            <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                defaultChecked />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
        </div>
    )
}

export default Rating