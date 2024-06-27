import React from 'react'
import Heading from './Heading'
import Text from './Text'

const SingleItem = ({ className, item, btn }) => {
    return (
        <div className={`card bg-base-100  shadow-xl rounded-none ${className}`}>
            <figure>
                <img src={item.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body text-center">
                <Heading text={item.name} className="font-bold text-xl" />
                <Text text={item.price} className="text-primary" />
                <div className="card-actions justify-center">
                    {btn && <button className="btn btn-primary">Buy Now</button>}
                </div>
            </div>
        </div>
    )
}

export default SingleItem