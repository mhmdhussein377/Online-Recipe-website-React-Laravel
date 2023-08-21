import { AiFillHeart } from "react-icons/ai";
import "./index.css"

const Recipe = () => {
    return (
        <div className="recipe">
            <div className="recipe-img">
                <img
                    src="https://img.freepik.com/premium-photo/ice-cream-gourmet-foood_118342-59082.jpg?w=740"
                    alt="recipe"/>
            </div>
            <div className="name-likes">
                <div className="name">Ice Cream</div>
                <div className="likes"><AiFillHeart size={30}/> 25</div>
            </div>
            <div className="cuisine">Lebanese</div>
            <div className="view-details">View Details</div>
        </div>
    );
}

export default Recipe