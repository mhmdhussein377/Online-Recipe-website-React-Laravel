import { Routes, Route } from "react-router-dom"
import './App.css'
import Layout from "./utils/Layout/Layout"
import Home from "./pages/Home/Home"

function App() {
    return (
        <Routes>
            <Route path='/home' element={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default App
