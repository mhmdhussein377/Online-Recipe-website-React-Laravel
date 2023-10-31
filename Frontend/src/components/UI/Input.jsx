
const Input = ({ label, name, type, placeholder, value, onChange }) => {
    return (
        <div className="input">
            <label htmlFor={name}>{label}</label>
            <input
                onChange={onChange}
                name={name}
                id={name}
                type={type}
                placeholder={placeholder}
                value={value || ''}/>
        </div>
    )
}

export default Input