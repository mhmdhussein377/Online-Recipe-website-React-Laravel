import {useState} from "react";
import "./index.css"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios"
import Input from "../../components/UI/Input";
import { LoginInputFields, handleInputsChange } from "../../utils/data";

const Login = () => {

    const [body,
        setBody] = useState({})
    const [validationError,
        setValidationError] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        handleInputsChange(e, setBody)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            let {data} = await axios.post("/login", body);
            localStorage.setItem("token", data.authorisation.token)
            navigate("/home")
        } catch (error) {
            setValidationError(true)
            setTimeout(() => {
                setValidationError(false)
            }, 3000)
        }
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="box">
                <div>Sign in</div>
                <h2>Login to your account</h2>
                <div className="inputs">
                    {LoginInputFields.map(({label, name, type, placeholder}, index) => (
                    <Input
                        key={index}
                        label={label}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={body[name] || ''}
                        onChange={handleChange}/>
                        ))}
                    {validationError && <p
                        style={{
                        color: 'var(--main-color)'
                    }}>Wrong Credentials</p>}
                    <div className="to-register">
                        Don't have an account?
                        <Link to="/register">Sign up</Link>
                    </div>
                </div>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login