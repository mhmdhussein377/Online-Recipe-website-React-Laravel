import {Outlet} from "react-router-dom"
import Navbar from "./../../components/Navbar/Navbar"
import "./index.css"

const Layout = () => {
    return (
        <div className="layout">
            <Navbar/>
            <div className="outlet">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout