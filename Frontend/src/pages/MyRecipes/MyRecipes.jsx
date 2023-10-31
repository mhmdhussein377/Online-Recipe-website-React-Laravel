import { useEffect, useState } from "react";
import Recipe from "../../components/Recipe/Recipe";
import "./index.css"
import axios from "axios";

const MyRecipes = () => {

    const [userRecipes, setUserRecipes] = useState([])

    useEffect(() => {
        const getRecipes = async() => {
            let { data } = await axios.get("/my-recipes", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            });
            setUserRecipes(data.recipes.reverse())
        }
        getRecipes()
    }, [])

    return (
        <div className="my-recipes">
            <h1>Welcome to Recipes</h1>
            <h2>My Recipes</h2>
            <div className="recipes">
                {userRecipes.length > 0 ? userRecipes.map((recipe, index) => (
                    <Recipe {...recipe} key={index} />
                )) : <h1>No Recepies</h1>}
            </div>
        </div>
    );
}

export default MyRecipes