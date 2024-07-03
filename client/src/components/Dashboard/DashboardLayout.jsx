import Topbar from "./Topbar"
import { Outlet } from "react-router-dom"
const DashboardLayout = () => {
    return (
        <>
            <Topbar />
            <Outlet />
        </>
    )
}

export default DashboardLayout