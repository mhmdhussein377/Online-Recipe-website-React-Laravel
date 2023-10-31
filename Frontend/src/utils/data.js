import {PiWallet} from "react-icons/pi"
import {BsCalendarEvent, BsCardList} from "react-icons/bs"
import {AiOutlineHeart, AiOutlinePlusCircle} from "react-icons/ai"


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

export const createRecipeInputFields = [
    {
        label: "Recipe name",
        name: "name",
        type: "text",
        placeholder: "Recipe name"
    }, {
        label: "Recipe cuisine",
        name: "cuisine",
        type: "text",
        placeholder: "Recipe cuisine"
    }
];

export const navLinks = [
    {
        to: '/home/create-recipe',
        icon: AiOutlinePlusCircle,
        size: 30
    }, {
        to: '/home/my-recipes',
        icon: PiWallet,
        size: 30
    }, {
        to: '/home/liked-recipes',
        icon: AiOutlineHeart,
        size: 30
    }, {
        to: '/home/shopping-list',
        icon: BsCardList,
        size: 30
    }, {
        to: '/calendar',
        icon: BsCalendarEvent,
        size: 30
    }
];