import "./index.css"

const Comment = ({comment, user}) => {
    return (
        <div className="comment">
            <div className="comment-user">{user?.name}</div>
            <div className="comment-content">
                {comment}
            </div>
        </div>
    );
}

export default Comment