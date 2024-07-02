import { ButtonFilled } from "../components/Buttons"
import Grid from "../components/Grid"
import Heading from "../components/Heading"
import Rating from "../components/Rating"
import Text from "../components/Text"

const SingleProduct = () => {
    return (
        <section className="m-6">
            <Grid className={"justify-between lg:h-[500px]"}>
                <article className="w-full md:w-[40%] h-full relative">
                    <img src="/images/item3.jpg" alt="item" className="h-full w-full object-cover" />
                    <div className="avatar placeholder absolute top-4 left-4">
                        <div className="bg-[#d6763c] text-neutral-content w-8 rounded-full">
                            <span className="text-xs">-24%</span>
                        </div>
                    </div>
                </article>
                <article className="w-full md:w-[58%]">
                    <Heading text="plain white shirt" className="font-semibold text-2xl capitalize" />
                    <Rating /> <br />
                    <div className="join">
                        <Text text="$69.0" className="line-through" /> &nbsp;&nbsp;&nbsp;
                        <Text text={"$59.0"} className="text-purple-900 font-medium" />
                    </div> <br />
                    <select className="select select-primary w-full max-w-xs outline-0 border-0 my-8">
                        <option disabled selected>Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                    </select> <br />
                    <ButtonFilled text={"add to cart"} /> <br />
                    <div className="join mt-8 mb-4 md:mb-0">
                        <img height={"30px"} width={"30px"} className="rounded-full mr-2 hover:cursor-pointer" src="/images/item1.jpg" alt="item_name" />
                        <img height={"30px"} width={"30px"} className="rounded-full mr-2 hover:cursor-pointer" src="/images/item2.jpg" alt="item_name" />
                        <img height={"30px"} width={"30px"} className="rounded-full mr-2 hover:cursor-pointer" src="/images/item3.jpg" alt="item_name" />
                    </div>
                </article>
            </Grid>
            <div className="join">
                <button className="btn join-item">Description</button>
                <button className="btn join-item">Reviews</button>
            </div><br />
            <div className="w-full border">
                <Text className="text-sm font-[300]" text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe incidunt culpa facilis facere sapiente recusandae, exercitationem ipsa modi sequi consectetur minus alias velit vel fuga dolore ducimus repudiandae delectus. Quae id ea sed corporis vitae quo quibusdam, vel saepe quas quos laudantium, blanditiis veniam quidem dicta voluptates, recusandae eaque quia."} />
            </div>

        </section>
    )
}

export default SingleProduct