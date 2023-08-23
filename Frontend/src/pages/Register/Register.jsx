import { useState } from "react"
import "./index.css"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

const Register = () => {

    let [body, setBody] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setBody({
            ...body,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            let { data } = await axios.post("http://127.0.0.1:8000/api/register", body);
            localStorage.setItem("token", data.authorisation.token)
            navigate("/home")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="register">
            <form onSubmit={handleSubmit} className="box">
                <div>Sign up</div>
                <h2>Create a new account</h2>
                <div className="inputs">
                    <div className="input">
                        <label htmlFor="name">Full name</label>
                        <input onChange={e => handleChange(e)} name="name" id="name" type="text" placeholder="Enter your full name"/>
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input onChange={e => handleChange(e)} name="email" id="email" type="email" placeholder="Enter your email"/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input onChange={e => handleChange(e)} name="password" id="password" type="password" placeholder="Enter password"/>
                    </div>
                    <div className="to-login">
                        Already have an account? <Link to="/">Sign in</Link>
                    </div>
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default Register