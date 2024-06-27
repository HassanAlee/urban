import { items } from "../../utils/itemsData"
import { ButtonFilled } from "../Buttons"
import Grid from "../Grid"
import Heading from "../Heading"
import SingleItem from "../SingleItem"
import Text from "../Text"

const TopSellers = () => {
    return (
        <div className="m-6">
            <Heading text={"top sellers"} className="text-center text-3xl font-bold uppercase" />
            <Text text={"Browse our top seller products"} className="text-center mt-4 mb-8" />
            <Grid>
                {
                    items.slice(0, 4).map((item, index) => <SingleItem btn={false} key={index} item={item} className={"w-full md:w-[24%]"} />)
                }
            </Grid>
            <div className="text-center my-20">
                <ButtonFilled text="shop now" />
            </div>
        </div>
    )
}

export default TopSellers