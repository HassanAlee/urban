import Topbar from "./Topbar"
import { Outlet } from "react-router-dom"
import Protected from "../Protected"
const DashboardLayout = () => {
    return (
        <Protected>
            <Topbar />
            <Outlet />
        </Protected>
    )
}

export default DashboardLayout