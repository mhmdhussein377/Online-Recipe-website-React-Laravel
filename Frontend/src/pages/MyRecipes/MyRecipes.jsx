import Recipe from "../../components/Recipe/Recipe";
import "./index.css"

const MyRecipes = () => {
    return (
        <div className="my-recipes">
            <h1>Welcome to Recipes</h1>
            <h2>My Recipes</h2>
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

export default MyRecipes