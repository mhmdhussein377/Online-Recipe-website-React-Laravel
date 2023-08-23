import "./index.css"
import Recipe from "./../../components/Recipe/Recipe"

const LikedRecipes = () => {

    

    return (
        <div className="liked-recipes">
            <h1>Welcome to Recipes</h1>
            <h2>Liked Recipes</h2>
            <div className="recipes">
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
            </div>
        </div>
    );
}

export default LikedRecipes