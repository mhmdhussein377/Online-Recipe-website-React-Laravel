import {AiFillHeart} from "react-icons/ai";
import "./index.css"

const Recipe = () => {
    return (
        <div className="recipe">
            <div className="recipe-img">
                <img
                    src="https://img.freepik.com/premium-photo/ice-cream-gourmet-foood_118342-59081.jpg?size=626&ext=jpg&ga=GA1.1.356022348.1691570131&semt=sph"
                    alt="recipe"/>
            </div>
            <div className="bottom-recipe">
                <div className="name-likes">
                    <div className="name">Ice Cream</div>
                    <div className="likes">
                        <AiFillHeart size={25}/>
                        25
                    </div>
                </div>
                <div className="cuisine">Lebanese</div>
                <button className="view-details">View Details</button>
            </div>
        </div>
    );
}

export default Recipe