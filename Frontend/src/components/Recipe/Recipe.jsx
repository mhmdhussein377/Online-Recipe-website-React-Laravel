import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import "./index.css"
import {useState} from "react";
import axios from "axios"
import {Link} from "react-router-dom";

const Recipe = ({
    id,
    name,
    cuisine,
    isLiked,
    likes_count_count,
    images
}) => {

    let [liked,
        setLiked] = useState(isLiked)
    let [likesNumber,
        setLikesNumber] = useState(likes_count_count)
    const url = location
        .href
        .split("/")
        .includes("my-recipes")

    const handleLike = async() => {

        setLiked(!liked)
        liked
            ? setLikesNumber(likesNumber - 1)
            : setLikesNumber(likesNumber + 1)

        await axios.get(`http://127.0.0.1:8000/api/like-recipe/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
    }

    return (
        <div className="recipe">
            <div className="recipe-img">
                <img src={`http://127.0.0.1:8000/storage/${images}`} alt="recipe"/>
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
                <Link
                    to={`${url
                    ? `/home/recipe/${id}`
                    : `/home/recipe/${id}`}`}>
                    <button className="view-details">View Details</button>
                </Link>
            </div>
        </div>
    );
}

export default Recipe