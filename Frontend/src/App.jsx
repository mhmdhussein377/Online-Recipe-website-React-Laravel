import { Routes, Route } from "react-router-dom"
import './App.css'
import Layout from "./utils/Layout/Layout"
import Home from "./pages/Home/Home"
import LikedRecipes from "./pages/LikedRecipes/LikedRecipes"
import MyRecipes from "./pages/MyRecipes/MyRecipes"
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe"
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails"

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="liked-recipes" element={<LikedRecipes/>}/>
                <Route path="my-recipes" element={<MyRecipes/>}/>
                <Route path="create-recipe" element={<CreateRecipe/>}/>
                <Route path="recipe/:id" element={<RecipeDetails/>}/>
            </Route>
        </Routes>
    )
}

export default App
