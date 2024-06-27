import Heading from "../Heading"
import Text from "../Text"

const Us = () => {
    return (
        <div className="m-6">
            <Heading text={"about urban"} className={"text-center font-bold text-3xl uppercase mt-12"} />
            <Text className="text-center px-4 md:px-28 mt-3 mb-10" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatem in error repellendus facilis pariatur! Tempora omnis distinctio aut nulla explicabo magni, atque pariatur optio velit dolorum mollitia impedit iure deserunt tenetur labore, esse repudiandae ducimus maxime? Maxime, provident id!"} />
            <div className="h-96 w-full">
                <img src="/images/about.jpg" alt="about_urban_image" className="h-full w-full object-cover" />
            </div>
        </div>
    )
}
export default Us