import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Topbar from "./Dashboard/Topbar";


const Protected = () => {
    const { user, navLoader } = useAuthContext()
    if (navLoader) {
        return <div className="loading"></div>
    }
    if (!user) {
        return <Navigate to={"/login"} />
    }
    return (
        <div className="relative min-h-screen">
            <Topbar />
            <Outlet />
        </div>
    )
};

export default Protected;
