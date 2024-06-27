import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./components/home/Hero"
import NewArrivals from "./components/home/NewArrivals"
import TopSellers from "./components/home/TopSellers"
import Why from "./components/home/Why"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewArrivals />
      <Why />
      <TopSellers />
      <Footer />
    </div>
  )
}

export default App
