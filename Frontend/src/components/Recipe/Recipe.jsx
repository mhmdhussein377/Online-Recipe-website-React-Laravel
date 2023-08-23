import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import "./index.css"
import {useState} from "react";
import axios from "axios"

const Recipe = ({id, name, cuisine, isLiked, likes_count_count}) => {

    let [liked,
        setLiked] = useState(isLiked)
    let [likesNumber, setLikesNumber] = useState(likes_count_count)

    const handleLike = async() => {
        setLiked(!liked)
        liked ? setLikesNumber(likesNumber - 1) : setLikesNumber(likesNumber + 1)
        
        await axios.get(`http://127.0.0.1:8000/api/like-recipe/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });
    }

    return (
        <div className="recipe">
            <div className="recipe-img">
                <img
                    src="https://img.freepik.com/premium-photo/ice-cream-gourmet-foood_118342-59081.jpg?size=626&ext=jpg&ga=GA1.1.356022348.1691570131&semt=sph"
                    alt="recipe"/>
            </div>
            <div className="bottom-recipe">
                <div className="name-likes">
                    <div className="name">{name}</div>
                    <div className="likes">
                            {liked
                                ? (<AiFillHeart className="heart-icon" onClick={handleLike} size={25}/>)
                                : (<AiOutlineHeart className="heart-icon" onClick={handleLike} size={25}/>)}
                        {likesNumber}
                    </div>
                </div>
                <div className="cuisine">{cuisine}</div>
                <button className="view-details">View Details</button>
            </div>
        </div>
    );
}

export default Recipe