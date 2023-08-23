import {useEffect, useState} from "react";
import "./index.css"
import Recipe from "../../components/Recipe/Recipe";
import axios from "axios";

const ShoppingList = () => {

    let [shoppinglistRecipes,
        setShoppingListRecipes] = useState([])

    useEffect(() => {
        const getShoppingListRecipes = async() => {
            let {data} = await axios.get("http://127.0.0.1:8000/api/shopping-list-recipes", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            });
            setShoppingListRecipes(data.shoppingListRecipes)
        }
        getShoppingListRecipes()
    }, [])

    return (
        <div className="liked-recipes">
            <h1>Welcome to Recipes</h1>
            <h2>Shopping List</h2>
            <div className="recipes">
                {shoppinglistRecipes.length > 0
                    ? (shoppinglistRecipes.map((recipe, index) => (<Recipe likes_count_count={recipe.recipe.likes.length} {...recipe.recipe} key={index}/>)))
                    : (
                        <h1>No recipes</h1>
                    )}
            </div>
        </div>
    );
}

export default ShoppingList