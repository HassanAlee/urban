import { ButtonOutlined } from "../Buttons"
const Hero = () => {
    return (
        <div
            className="hero min-h-96 max-h-screen"
            style={{
                backgroundImage: "url(/images/home-bg.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">stylist picks beat</h1>
                    <h1 className="mb-5 text-5xl font-bold uppercase">the heat</h1>
                    <ButtonOutlined text={"shop now"} />
                </div>
            </div>
        </div>
    )
}

export default Hero
