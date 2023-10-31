import {AiOutlineHome} from "react-icons/ai"
import "./index.css"
import {TbLetterM} from "react-icons/tb"
import {IoIosLogOut} from "react-icons/io"
import {Link, useNavigate} from "react-router-dom"
import {navLinks} from "../../utils/data"
import NavIcon from "../UI/NavIcon"

const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    const renderNavLinks = (navLinks) => (navLinks.map((link, index) => (<NavIcon key={index} to={link.to} icon={link.icon} size={link.size}/>)))

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
                {renderNavLinks(navLinks)}
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