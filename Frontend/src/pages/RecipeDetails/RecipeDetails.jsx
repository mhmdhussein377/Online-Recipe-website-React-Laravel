import {useEffect, useState} from "react";
import "./index.css"
import {useParams} from "react-router-dom";
import axios from "axios";
import Comment from "../../components/Comment/Comment";
import CommentForm from "../../components/CommentForm/CommentForm";
import ShareButtons from "../../components/ShareButtons/ShareButtons";

const RecipeDetails = () => {

    let [isCommentOpened,
        setIsCommentOpened] = useState(false)
    let [recipe,
        setRecipe] = useState(null)
    let [inShoppingList,
        setInShoppingList] = useState(false)

    const {id} = useParams()

    useEffect(() => {
        const getRecipe = async() => {
            let {data} = await axios.get(`http://127.0.0.1:8000/api/recipes/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setRecipe(data.recipe)
            setInShoppingList(data.recipe.isInShoppingList)
            console.log(data)
        }
        getRecipe()
    }, [])

    const handleAddToShoppingList = async() => {
        try {
            setInShoppingList(!inShoppingList)
            let {data} = await axios.get(`http://127.0.0.1:8000/api/create-shopping-list-recipe/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="recipe-details">
            <div className="top">
                <div className="recipe-img">
                    <img src={`http://127.0.0.1:8000/storage/${recipe?.images}`} alt="recipe-img"/>
                </div>
                <div className="recipe-content">
                    <div className="recipe-name-user">
                        <h2>
                            {recipe
                                ?.name}
                            - {recipe
                                ?.cuisine}
                        </h2>
                        <p>by {recipe
                                ?.user.name}</p>
                    </div>
                    <div className="ingredients">
                        <h3>Ingredients</h3>
                        <div className="ingredients-content">
                            <ul>
                                {recipe
                                    ?.ingredients
                                        ?.map((item, index) => (
                                            <li key={index}>{item.name}</li>
                                        ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="comments">
                    <div className="head">
                        <h4>Comments</h4>
                        <div onClick={(e) => setIsCommentOpened(true)} className="create-comment">
                            <button>Create comment</button>
                        </div>
                    </div>
                    {isCommentOpened && (<CommentForm
                        recipeId={id}
                        setRecipe={setRecipe}
                        setIsCommentOpened={setIsCommentOpened}/>)}
                    <div className="comments-content">
                        {recipe
                            ?.comments.length > 0
                                ? (recipe.comments.slice().reverse().map((comment, index) => <Comment key={index} {...comment}/>))
                                : (
                                    <h1>No comments</h1>
                                )}
                    </div>
                </div>
                <div className="bottom-right">
                    <button onClick={handleAddToShoppingList}>
                        {inShoppingList
                            ? "Remove from shopping list"
                            : "Add to shopping list"}
                    </button>
                    <button>Add to calendar</button>
                    <ShareButtons name={recipe
                        ?.name}/> {/* <button>Share on social media</button> */}
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails