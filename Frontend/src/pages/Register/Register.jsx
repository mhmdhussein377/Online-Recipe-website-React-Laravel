import {useState} from "react"
import "./index.css"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import {handleInputsChange, registerInputFields} from "../../utils/data"

const Register = () => {

    const [body,
        setBody] = useState({})
    const [error,
        setError] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        handleInputsChange(e, setBody)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            let {data} = await axios.post("/register", body);
            localStorage.setItem("token", data.authorisation.token)
            navigate("/home")
        } catch (error) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
            console.log(error)
        }
    }

    const renderInputFields = (error) => {
        return registerInputFields.map(({
            label,
            name,
            type,
            placeholder,
            minLength
        }, index) => (
            <div className="input" key={index}>
                <label htmlFor={name}>{label}</label>
                <input
                    onChange={handleChange}
                    name={name}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    value={body[name] || ""}
                    minLength={minLength}/> 
                    {name === "email" && error && (
                    <p
                        style={{
                        color: "var(--main-color)"
                    }}>
                        Email has already been taken
                    </p>
                )}
            </div>
        ));
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit} className="box">
                <div>Sign up</div>
                <h2>Create a new account</h2>
                <div className="inputs">
                    {renderInputFields(error)}
                    <div className="to-login">
                        Already have an account?
                        <Link to="/">Sign in</Link>
                    </div>
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default Register