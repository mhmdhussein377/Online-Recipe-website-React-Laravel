import { useRef } from "react"
import "./index.css"
import {AiOutlinePlus} from "react-icons/ai"
import {IoIosClose} from "react-icons/io"

const CreateRecipe = () => {

    const photoRef = useRef()

    return (
        <div className="create-recipe">
            <h1>Welcome to Recipes</h1>
            <h2>Create Recipe</h2>
            <div className="create-recipe-box">
                <div className="input">
                    <label htmlFor="recipe-name">Recipe name</label>
                    <input type="text" id="recipe-name" placeholder="Recipe name"/>
                </div>
                <div className="input">
                    <label htmlFor="recipe-cuisine">Recipe cuisine</label>
                    <input type="text" id="recipe-cuisine" placeholder="Recipe cuisine"/>
                </div>
                <div className="add-ingredient">
                    <label htmlFor="Ingredients">Add ingredient</label>
                    <form className="add-ingredient-input">
                        <input type="text" placeholder="Add ingredient"/>
                        <button type="submit">
                            <AiOutlinePlus size={25}/>
                        </button>
                    </form>
                    <div className="ingredients">
                        <div className="ingredient">
                            <div className="ingredient-name">1 ltr milk</div>
                            <div className="remove-ingredient">
                                <IoIosClose size={30}/>
                            </div>
                        </div>
                        <div className="ingredient">
                            <div className="ingredient-name">1 ltr milk</div>
                            <div className="remove-ingredient">
                                <IoIosClose size={30}/>
                            </div>
                        </div>
                        <div className="ingredient">
                            <div className="ingredient-name">1 ltr milk</div>
                            <div className="remove-ingredient">
                                <IoIosClose size={30}/>
                            </div>
                        </div>
                        <div className="ingredient">
                            <div className="ingredient-name">1 ltr milk</div>
                            <div className="remove-ingredient">
                                <IoIosClose size={30}/>
                            </div>
                        </div>
                        <div className="ingredient">
                            <div className="ingredient-name">1 ltr milk</div>
                            <div className="remove-ingredient">
                                <IoIosClose size={30}/>
                            </div>
                        </div>
                        <div className="ingredient">
                            <div className="ingredient-name">1 ltr milk</div>
                            <div className="remove-ingredient">
                                <IoIosClose size={30}/>
                            </div>
                        </div>
                        <div className="ingredient">
                            <div className="ingredient-name">1 ltr milk and potato</div>
                            <div className="remove-ingredient">
                                <IoIosClose size={30}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={e => photoRef.current.click()} className="add-photo">Add photo</div>
                <input ref={photoRef} type="file" style={{display: "none"}} />
                <button type="submit">Create Recipe</button>
            </div>
        </div>
    );
}

export default CreateRecipe