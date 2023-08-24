import {Routes, Route} from "react-router-dom"
import './App.css'
import Layout from "./utils/Layout/Layout"
import Home from "./pages/Home/Home"
import LikedRecipes from "./pages/LikedRecipes/LikedRecipes"
import MyRecipes from "./pages/MyRecipes/MyRecipes"
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe"
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import ShoppingList from "./pages/ShoppingList/ShoppingList"

function App() {
    return (
        <Routes>
            <Route path="/register" element={< Register />}/>
            <Route path="/" element={< Login />}/>
            <Route path="/home" element={< Layout />}>
                <Route index element={< Home />}/>
                <Route path="/home/recipe/:id" element={< RecipeDetails />}/>
                <Route path="/home/my-recipes" element={< MyRecipes />}/>
                <Route path="/home/create-recipe" element={< CreateRecipe />}/>
                <Route path="/home/shopping-list" element={< ShoppingList />}/>
                <Route path="/home/liked-recipes" element={< LikedRecipes />} />
                    {/* <Route path="/home/liked-recipes/:id" element={< RecipeDetails />}/> */}
            </Route>
        </Routes>
    );
}

export default App
