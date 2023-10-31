import {AiFillHeart} from "react-icons/ai";
import axios from "axios";
import {Link} from "react-router-dom";

const LikedRecipe = ({
    id,
    name,
    cuisine,
    likes_count_count,
    setLikedRecipes,
    images
}) => {

    const handleLike = async() => {
        setLikedRecipes(prev => prev.filter(item => item.id !== id))

        await axios.get(`/like-recipe/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    };

    return (
        <div className="recipe">
            <div className="recipe-img">
                <img src={`http://127.0.0.1:8000/storage/${images}`} alt="recipe"/>
            </div>
            <div className="bottom-recipe">
                <div className="name-likes">
                    <div className="name">{name}</div>
                    <div className="likes">
                        <AiFillHeart className="heart-icon" onClick={handleLike} size={25}/>{" "} {likes_count_count}
                    </div>
                </div>
                <div className="cuisine">{cuisine}</div>
                <Link to={`/home/recipe/${id}`}>
                    <button className="view-details">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default LikedRecipe;
