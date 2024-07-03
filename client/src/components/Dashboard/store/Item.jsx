import React from 'react'
import Heading from '../../Heading'
import { FaTrash } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
const Item = ({ name, price, image = "", quanntity, className }) => {
    return (
        <article className={`${className} relative`}>
            <img src={image} alt={name} className='h-[60%] w-full object-cover' />
            <div className='pl-2'>
                <Heading text={name} className="text-sm" />
                <Heading text={price} className="text-sm" />
                <Heading text={"Stock: " + quanntity} className="text-sm" />
            </div>
            <div className='absolute top-1 right-1 join'>
                <GrEdit className='mr-1' />
                <FaTrash />
            </div>
        </article>
    )
}

export default Item