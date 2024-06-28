import Heading from "../Heading"
import { testimonialsData } from "../../utils/itemsData"
import Grid from "../Grid"
import Text from "../Text"
const Testimonials = () => {
    return (
        <div className="m-6 mt-10">
            <Heading text={"testimonials"} className="text-center text-3xl font-bold uppercase" />
            <div className="mt-4">
                {
                    testimonialsData.map((item) => {
                        return (
                            <Grid className="w-full mb-8">
                                <div className=" w-full md:w-[10%]">
                                    <img src={item.image} alt={item.name}
                                        className="rounded-full h-[120px] w-[120px] mx-auto" />
                                </div>
                                <div className=" w-full md:w-[50%]">
                                    <img src="/images/comma.png" alt="comma" />
                                    <Heading text={item.text} className="font-normal text-xl mb-2 text-center" />
                                    <Text text={item.name} className="text-xl font-bold text-center" />
                                </div>
                            </Grid>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Testimonials