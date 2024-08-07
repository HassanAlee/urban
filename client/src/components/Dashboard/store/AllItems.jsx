import React, { useState } from 'react'
import Grid from '../../Grid'
import { items } from '../../../utils/itemsData'
import Item from './Item'
import { IconButton } from '../../Buttons'
import { IoMdAddCircleOutline } from "react-icons/io";
import AddProductForm from './AddProductForm'
const AllItems = () => {
    const [showForm, setShowForm] = useState(false)
    return (
        <section className='max-h-[98vh] overflow-hidden'>
            <div className='text-end my-4 mr-10'>
                <IconButton text={"Add Product"} icon={<IoMdAddCircleOutline size={20} />} onClick={() => setShowForm(true)} />
            </div>
            <div className={`absolute h-full w-full bg-black bg-opacity-70 top-0 left-0 z-10  ${showForm ? "block" : "hidden"}`}>
                <AddProductForm setShowForm={setShowForm} />
            </div>
            <Grid>
                {
                    items.map((item, index) => <Item key={index} {...item} className=" max-h-36 w-1/3 md:w-[10%] shadow-xl rounded-md" />)
                }
            </Grid>
        </section>
    )
}

export default AllItems