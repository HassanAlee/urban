import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Routes, Route, Outlet } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from './pages/Contact'
import SingleProduct from "./pages/SingleProduct"
import DashboardLayout from './components/Dashboard/DashboardLayout'
import Layout from "./components/Layout"
import Orders from "./pages/Dashboard/Orders"
import Store from "./pages/Dashboard/Store"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/single" element={<SingleProduct />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/" element={<Orders />} />
          <Route path="/dashboard/store" element={<Store />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
