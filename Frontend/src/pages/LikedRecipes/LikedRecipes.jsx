import "./index.css"
import Recipe from "./../../components/Recipe/Recipe"
import {useEffect, useState} from "react"
import axios from "axios"
import LikedRecipe from "../../components/LikedRecipe/LikedRecipe"

const LikedRecipes = () => {

    let [likedRecipes,
        setLikedRecipes] = useState([])

    useEffect(() => {
        try {
            const getRecipes = async() => {
                let {data} = await axios.get("http://127.0.0.1:8000/api/liked-recipes", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setLikedRecipes(data.recipes)
            };
            getRecipes();
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="liked-recipes">
            <h1>Welcome to Recipes</h1>
            <h2>Liked Recipes</h2>
            <div className="recipes">
                {likedRecipes.length > 0 ? likedRecipes.map((recipe, index) => (
                    <LikedRecipe setLikedRecipes={setLikedRecipes} {...recipe} key={index} />
                )) : <h1>No liked recipes</h1>}
            </div>
        </div>
    );
}

export default LikedRecipes