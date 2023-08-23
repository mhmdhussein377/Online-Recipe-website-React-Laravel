import {useEffect, useState} from "react"
import Recipe from "../../components/Recipe/Recipe"
import "./index.css"
import {AiOutlineSearch} from "react-icons/ai"
import axios from "axios"

const Home = () => {

    let [recipes,
        setRecipes] = useState([])

    useEffect(() => {
        try {
            const getRecipes = async() => {
                let {data} = await axios.get("http://127.0.0.1:8000/api/recipes", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setRecipes(data.recipes)
            };
            getRecipes();
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="home">
            <div className="top">
                <h1>Welcome to Recipes</h1>
                <div className="search">
                    <AiOutlineSearch size={25}/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <h2>Recipes</h2>
            <div className="recipes">
                {recipes.length > 0 ? recipes.map((recipe, index) => (
                    <Recipe recipe={recipe} {...recipe} key={index} />
                )) : <h1>No Recipes</h1>}
            </div>
        </div>
    );
}

export default Home