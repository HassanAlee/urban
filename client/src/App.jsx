import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from './pages/Contact'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
