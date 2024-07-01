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
                        <Text text="$69.0" /> &nbsp;&nbsp;&nbsp;
                        <Text text={"$59.0"} />
                    </div> <br />
                    <select className="select select-primary w-full max-w-xs outline-0 border-0">
                        <option disabled selected>What is the best TV show?</option>
                        <option>Game of Thrones</option>
                        <option>Lost</option>
                        <option>Breaking Bad</option>
                        <option>Walking Dead</option>
                    </select> <br />
                    <ButtonFilled text={"add to cart"} /> <br />
                    <div className="join">
                        <button className="btn join-item">Button</button>
                        <button className="btn join-item">Button</button>
                        <button className="btn join-item">Button</button>
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