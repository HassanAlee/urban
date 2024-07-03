import React from 'react'
import Grid from '../../Grid'
import { items } from '../../../utils/itemsData'
import Item from './Item'
const AllItems = () => {
    return (
        <Grid>
            {
                items.map((item, index) => <Item key={index} {...item} className=" max-h-36 w-1/3 md:w-[10%] shadow-xl rounded-md" />)
            }
        </Grid>
    )
}

export default AllItems