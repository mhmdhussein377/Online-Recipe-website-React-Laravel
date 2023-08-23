import {IoIosClose} from "react-icons/io";

const Ingredient = ({name, setIngredients, id}) => {

    console.log(id)
    console.log("key")

    const handleRemoveIngredient = () => {
        setIngredients(prev => prev.filter((item, index) => index !== id ))
    }

    return (
        <div className="ingredient">
            <div className="ingredient-name">{name}</div>
            <div onClick={handleRemoveIngredient} className="remove-ingredient">
                <IoIosClose size={30}/>
            </div>
        </div>
    );
}

export default Ingredient