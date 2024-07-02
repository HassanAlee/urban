import React from 'react'

const Rating = () => {
    return (
        <div className="rating rating-sm rating-half my-8">
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-[#d6763c]" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-[#d6763c]" />
            <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-[#d6763c]"
                defaultChecked />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-[#d6763c]" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-[#d6763c]" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-[#d6763c]" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-[#d6763c]" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-[#d6763c]" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-[#d6763c]" />
            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-[#d6763c]" />
        </div>
    )
}

export default Rating