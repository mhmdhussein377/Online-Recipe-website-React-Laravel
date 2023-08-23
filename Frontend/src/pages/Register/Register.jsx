import "./index.css"
import Link from "react-router-dom"

const Register = () => {
    return (
        <div className="register">
            <form className="box">
                <div>Sign up</div>
                <h1>Create a new account</h1>
                <div className="inputs">
                    <div className="input">
                        <label htmlFor="name">Full name</label>
                        <input name="name" id="name" type="text" placeholder="Enter your full name"/>
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Enter your email"/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Full name</label>
                        <input id="password" type="password" placeholder="Enter password"/>
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