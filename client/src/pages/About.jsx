import MedHero from "../components/MedHero"
import Founders from "../components/about/Founders"
import Testimonials from "../components/about/Testimonials"
import Us from "../components/about/Us"
import Footer from '../components/Footer'
const About = () => {
    return (
        <>
            <MedHero text={"about us"} />
            <Us />
            <Founders />
            <Testimonials />
        </>
    )
}

export default About