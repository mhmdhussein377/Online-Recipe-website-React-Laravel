import {AiOutlineHeart, AiOutlineHome, AiOutlinePlusCircle} from "react-icons/ai"
import "./index.css"
import {TbLetterM} from "react-icons/tb"
import {PiWallet} from "react-icons/pi"
import {BsCalendarEvent, BsCardList} from "react-icons/bs"
import {IoIosLogOut} from "react-icons/io"
import {Link, NavLink, useNavigate} from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    console.log(location.href)

    return (
        <div className="navbar">
            <div className="logo">
                <TbLetterM size={30}/>
            </div>
            <div className="mid-icons">
                <Link
                    to="/home"
                    className={`icon ${location.href === "http://localhost:5173/home" && "active"}`}>
                    <AiOutlineHome size={30}/>
                </Link>
                <NavLink
                    exact
                    className={({isActive}) => (isActive
                    ? "icon active"
                    : "icon")}
                    to="/home/create-recipe">
                    <AiOutlinePlusCircle size={30}/>
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive
                    ? "icon active"
                    : "icon")}
                    to="/home/my-recipes">
                    <PiWallet size={30}/>
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive
                    ? "icon active"
                    : "icon")}
                    to="/home/liked-recipes">
                    <AiOutlineHeart size={30}/>
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive
                    ? "icon active"
                    : "icon")}
                    to="/home/shopping-list">
                    <BsCardList size={30}/>
                </NavLink>
                <NavLink
                    to="/calendar"
                    className={({isActive}) => (isActive
                    ? "icon active"
                    : "icon")}>
                    <BsCalendarEvent size={30}/>
                </NavLink>
            </div>
            <div className="logout">
                <div className="icon">
                    <IoIosLogOut onClick={handleLogout} size={30}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar