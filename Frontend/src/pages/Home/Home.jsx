import Recipe from "../../components/Recipe/Recipe"
import "./index.css"
import {AiOutlineSearch} from "react-icons/ai"

const Home = () => {
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

export default Home