import Heading from "../Heading"
import SingleItem from "../SingleItem"
import Text from "../Text"
import { items } from "../../utils/itemsData"
import Grid from "../Grid"
const NewArrivals = () => {
    return (
        <div className="m-6">
            <Heading text={"discover new arrivals"} className="text-center text-3xl font-bold uppercase" />
            <Text text={"Recently added shirts"} className="text-center mt-4 mb-8" />
            <Grid>
                {
                    items.map((item, index) => <SingleItem key={index} item={item} className={"w-full md:w-[24%]"} />)
                }
            </Grid>
        </div>
    )
}

export default NewArrivals