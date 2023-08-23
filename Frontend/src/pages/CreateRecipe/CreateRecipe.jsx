import {useRef, useState} from "react"
import "./index.css"
import {AiOutlinePlus} from "react-icons/ai"
import Ingredient from "../Ingredient/Ingredient"
import axios from "axios"

const CreateRecipe = () => {

    let [ingredients,
        setIngredients] = useState([])
    let [name,
        setName] = useState("")
    let [cuisine,
        setCuisine] = useState("")
    let [ingredient,
        setIngredient] = useState("")
    let [base64,
        setBase64] = useState("")
    const photoRef = useRef()

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
        console.log(base64)
    }


    const handleCreateRecipe = async(e) => {
        e.preventDefault()

        try {
            const newBase64 = base64.split(",")[1];
            let { data } = await axios.post(
              "http://127.0.0.1:8000/api/create-recipe",
              {
                name,
                cuisine,
                image: newBase64,
                ingredients,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="create-recipe">
            <h1>Welcome to Recipes</h1>
            <h2>Create Recipe</h2>
            <form onSubmit={handleCreateRecipe} className="create-recipe-box">
                <div className="input">
                    <label htmlFor="recipe-name">Recipe name</label>
                    <input
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        id="recipe-name"
                        placeholder="Recipe name"/>
                </div>
                <div className="input">
                    <label htmlFor="recipe-cuisine">Recipe cuisine</label>
                    <input
                        required
                        value={cuisine}
                        onChange={e => setCuisine(e.target.value)}
                        type="text"
                        id="recipe-cuisine"
                        placeholder="Recipe cuisine"/>
                </div>
                <div className="add-ingredient">
                    <label htmlFor="Ingredients">Add ingredient</label>
                    <div  className="add-ingredient-input">
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