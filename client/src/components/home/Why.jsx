import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import Heading from '../Heading'
import Text from '../Text'
import Grid from '../Grid';
import { whyData } from '../../utils/itemsData';
const Why = () => {
    return (
        <Grid className="p-12">
            {
                whyData.map((item, index) => <SingleWhy key={index} item={item} />)
            }
        </Grid>
    )
}

const SingleWhy = ({ item }) => {
    return (
        <article className='flex gap-4 w-60'>
            {item.icon}
            <div>
                <Heading text={item.heading} />
                <Text text={item.text} />
            </div>
        </article>
    )
}
export default Why