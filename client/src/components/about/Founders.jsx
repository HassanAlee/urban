import { foundersData } from "../../utils/itemsData"
import Grid from "../Grid"
import Heading from "../Heading"
const Founders = () => {
    return (
        <div className="m-6 mt-12">
            <Heading text={"Urban. Founders"} className="text-center text-3xl font-bold uppercase" />
            <Grid className={"gap-8 md:gap-4"}>
                {
                    foundersData.map((item, index) => {
                        return (
                            <div className=" w-full md:w-[20%] h-60 my-8" key={index}>
                                <img src={item.image} alt={item.name} className="h-full w-full object-cover rounded-md" />
                                <Heading text={item.name} className="text-center text-2xl font-normal" />
                            </div>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Founders