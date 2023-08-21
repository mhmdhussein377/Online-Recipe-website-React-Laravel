import "./index.css"
import { AiOutlinePlus } from "react-icons/ai"
import { IoIosClose } from "react-icons/io"

const CreateRecipe = () => {
    return (
        <div className="create-recipe">
            <h1>Welcome to Recipes</h1>
            <h2>Create Recipe</h2>
            <div className="create-box">
                <div className="input">
                    <label htmlFor="recipe-name">Recipe name</label>
                    <input type="text" id="recipe-name" placeholder="Recipe name"/>
                </div>
                <div className="input">
                    <label htmlFor="recipe-cuisine">Recipe cuisine</label>
                    <input type="text" id="recipe-cuisine" placeholder="Recipe cuisine"/>
                </div>
                <div className="add-ingredient">
                    <label htmlFor="Ingredients"></label>
                    <div>
                        <input type="text" placeholder="Add ingredient"/>
                        <button><AiOutlinePlus size={25} /></button>
                    </div>
                    <div className="ingredients">
                        <div className="ingredient">1 ltr milk</div>
                        <div className="remove-ingredient"><IoIosClose size={30} /></div>
                    </div>
                </div>
                <div className="add-photo">Add photo</div>
                <button type="submit">Create Recipe</button>
            </div>
        </div>
    );
}

export default CreateRecipe