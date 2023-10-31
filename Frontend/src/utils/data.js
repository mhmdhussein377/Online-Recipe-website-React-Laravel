export const LoginInputFields = [
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeholder: 'Enter your email'
    }, {
        label: 'Password',
        name: 'password',
        type: 'password',
        placeholder: 'Enter password'
    }
];

export const handleInputsChange = (e, setInputs) => {
    setInputs(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
}

export const registerInputFields = [
    {
        label: "Full name",
        name: "name",
        type: "text",
        placeholder: "Enter your full name"
    }, {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Enter your email"
    }, {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "Enter password",
        minLength: 6
    }
];