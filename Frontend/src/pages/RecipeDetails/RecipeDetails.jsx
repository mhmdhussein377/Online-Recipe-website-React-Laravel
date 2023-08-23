import "./index.css"

const RecipeDetails = () => {
    return (
        <div className="recipe-details">
            <div className="top">
                <div className="recipe-img">
                    <img
                        src="https://img.freepik.com/premium-photo/ice-cream-gourmet-foood_118342-59081.jpg?size=626&ext=jpg&ga=GA1.1.356022348.1691570131&semt=sph"
                        alt="recipe-img"/>
                </div>
                <div className="recipe-content">
                    <div className="recipe-name-user">
                        <h3>Tomato Soup - Lebanese</h3>
                        <p>by Mohammad hussein</p>
                    </div>
                    <div className="ingredients">
                        <h4>Ingredients</h4>
                        <div className="ingredients-content">
                            <ul>
                                <li>1 tbsp olive oil</li>
                                <li>Add the stock to the veg pan with tinned tomatoes.</li>
                                <li>1 tbsp olive oil</li>
                                <li>Add the stock to the veg pan with tinned tomatoes.</li>
                                <li>1 tbsp olive oil</li>
                                <li>Add the stock to the veg pan with tinned tomatoes.</li>
                                <li>1 tbsp olive oil</li>
                                <li>Add the stock to the veg pan with tinned tomatoes.</li>
                                <li>1 tbsp olive oil</li>
                                <li>Add the stock to the veg pan with tinned tomatoes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="comments">
                    <div className="head">
                        <h4>Comments</h4>
                        <div className="create-comment">
                            <button>Create comment</button>
                        </div>
                    </div>
                    <form className="comment-form">
                        <input type="text" placeholder="Write something"/>
                        <div className="close">X</div>
                    </form>
                    <div className="comments-content">
                        <div className="comment">
                            <div className="comment-user">Mohammad Hussein</div>
                            <div className="comment-content">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, commodi.
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment-user">Mohammad Hussein</div>
                            <div className="comment-content">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, commodi.
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment-user">Mohammad Hussein</div>
                            <div className="comment-content">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, commodi.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-right">
                    <button>Add to shopping list</button>
                    <button>Add to calendar</button>
                    <button>Share on social media</button>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails