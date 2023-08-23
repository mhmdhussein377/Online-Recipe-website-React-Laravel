import {AiOutlineHeart, AiOutlineHome, AiOutlinePlusCircle} from "react-icons/ai"
import "./index.css"
import {TbLetterM} from "react-icons/tb"
import {PiWallet} from "react-icons/pi"
import {BsCalendarEvent, BsCardList} from "react-icons/bs"
import {IoIosLogOut} from "react-icons/io"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <TbLetterM size={30}/>
            </div>
            <div className="mid-icons">
                <div className="icon">
                    <AiOutlineHome size={25}/>
                </div>
                <div className="icon">
                    <AiOutlinePlusCircle size={25}/>
                </div>
                <div className="icon">
                    <PiWallet size={25}/>
                </div>
                <div className="icon">
                    <AiOutlineHeart size={25}/>
                </div>
                <div className="icon">
                    <BsCardList size={25}/>
                </div>
                <div className="icon">
                    <BsCalendarEvent size={25}/>
                </div>
            </div>
            <div className="logout">
                <div className="icon">
                    <IoIosLogOut size={25}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar