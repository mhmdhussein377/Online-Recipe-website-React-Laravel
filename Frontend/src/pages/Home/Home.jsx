import {useEffect, useState} from "react"
import Recipe from "../../components/Recipe/Recipe"
import "./index.css"
import {AiOutlineSearch} from "react-icons/ai"
import axios from "axios"

const Home = () => {

    const [recipes,
        setRecipes] = useState([])
    const [searchTerm,
        setSearchTerm] = useState("")

    const getRecipes = async() => {
        let {data} = await axios.get("/recipes", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        setRecipes(data.recipes.reverse());
    };

    useEffect(() => {
        try {
            getRecipes();
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleChange = async(e) => {
        setSearchTerm(e.target.value)
        if (e.target.value === "") {
            getRecipes()
        }
    }

    const handleSearch = async(e) => {
        e.preventDefault()

        try {
            let {data} = await axios.get(`/search/${searchTerm}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            });
            setRecipes(data.recipes)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="home">
            <div className="top">
                <h1>Welcome to Recipes</h1>
                <form onSubmit={handleSearch} className="search">
                    <AiOutlineSearch size={25}/>
                    <input
                        value={searchTerm}
                        onChange={handleChange}
                        type="text"
                        placeholder="Search"/>
                </form>
            </div>
            <h2>Recipes</h2>
            <div className="recipes">
                {recipes.length > 0
                    ? recipes.map((recipe, index) => (<Recipe recipe={recipe} {...recipe} key={index}/>))
                    : <h1>No Recipes</h1>}
            </div>
        </div>
    );
}

export default Home