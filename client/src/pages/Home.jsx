import Navbar from "../components/Navbar"
import Hero from "../components/home/Hero"
import NewArrivals from "../components/home/NewArrivals"
import TopSellers from "../components/home/TopSellers"
import Why from "../components/home/Why"

const Home = () => {
    return (
        <>
            <Hero />
            <NewArrivals />
            <Why />
            <TopSellers />
        </>
    )
}

export default Home