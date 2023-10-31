import {useState} from 'react';
import './index.css'
import axios from 'axios';

const CommentForm = ({setIsCommentOpened, setRecipe, recipeId}) => {
    const [input,
        setInput] = useState("");

    const handleComment = async(e) => {
        e.preventDefault();

        try {
            let {data} = await axios.post(`/create-comment/${recipeId}`, {
                comment: input
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setRecipe(prev => (
                {
                ...prev,
                comments: [...prev.comments, data.comment]
            }))
            setInput("")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleComment} className="comment-form">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write something"/>
            <div onClick={() => setIsCommentOpened(false)} className="close">
                X
            </div>
        </form>
    );
};

export default CommentForm