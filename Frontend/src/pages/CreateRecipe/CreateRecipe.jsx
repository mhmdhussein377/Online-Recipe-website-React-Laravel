import {useRef, useState} from "react"
import "./index.css"
import {AiOutlinePlus} from "react-icons/ai"
import Ingredient from "../Ingredient/Ingredient"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Input from "../../components/UI/Input"
import { createRecipeInputFields } from "../../utils/data"

const CreateRecipe = () => {

    const [ingredients,
        setIngredients] = useState([])
    const [name,
        setName] = useState("")
    const [cuisine,
        setCuisine] = useState("")
    const [ingredient,
        setIngredient] = useState("")
    const [base64,
        setBase64] = useState("")
    const [photoError,
        setPhotoError] = useState(false)
    const photoRef = useRef()
    const navigate = useNavigate()

    const handleAddIngredient = (e) => {
        e.preventDefault()

        setIngredients([
            ingredient, ...ingredients
        ])
        setIngredient("")
    }

    const handleFileInput = (e) => {
        if (e.target.files.length > 0) {
            function getBase64(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = (error) => reject(error);
                });
            }
            getBase64(e.target.files[0]).then((data) => {
                console.log(data)
            });

            const reader = new FileReader();
            reader.onloadend = () => {
                setBase64(reader.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleCreateRecipe = async(e) => {
        e.preventDefault()

        if (!base64) {
            setPhotoError(true)
            setTimeout(() => {
                setPhotoError(false)
            }, 3000)
        }

        try {
            const newBase64 = base64.split(",")[1];
            await axios.post("/create-recipe", {
                name,
                cuisine,
                image: newBase64,
                ingredients
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            navigate('/home/my-recipes')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="create-recipe">
            <h1>Welcome to Recipes</h1>
            <h2>Create Recipe</h2>
            <form onSubmit={handleCreateRecipe} className="create-recipe-box">
                {createRecipeInputFields.map(({label, name, type, placeholder}, index) => (<Input
                    key={index}
                    label={label}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={name === "name"
                    ? name
                    : cuisine}
                    onChange={(e) => name === "name"
                    ? setName(e.target.value)
                    : setCuisine(e.target.value)}/>))}
                <div className="add-ingredient">
                    <label htmlFor="Ingredients">Add ingredient</label>
                    <div className="add-ingredient-input">
                        <input
                            value={ingredient}
                            onChange={e => setIngredient(e.target.value)}
                            type="text"
                            placeholder="Add ingredient"/>
                        <div onClick={handleAddIngredient}>
                            <AiOutlinePlus size={25}/>
                        </div>
                    </div>
                    <div className="ingredients">
                        {ingredients.map((ingredient, index) => (<Ingredient
                            setIngredients={setIngredients}
                            id={index}
                            key={index}
                            name={ingredient}/>))}
                    </div>
                </div>
                <div
                    onClick={e => photoRef
                    .current
                    .click()}
                    className="add-photo">Add photo</div>
                {photoError && <p className="photo-error">A photo is required</p>}
                <input
                    onChange={handleFileInput}
                    ref={photoRef}
                    type="file"
                    style={{
                    display: "none"
                }}/>
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    );
}

export default CreateRecipe