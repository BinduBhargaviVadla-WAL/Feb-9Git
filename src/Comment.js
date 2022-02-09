import { useState } from "react";
const Comment = () => {
    let [comment, setCommnet] = useState([]);
    const addComment = (event) => {
        event.preventDefault();
        let commnetObject = {
            title: event.target.title.value,
            body: event.target.body.value,
            author: event.target.author.value,
            date: event.target.date.value,
        };
        console.log(commnetObject.title);
        console.log(commnetObject.author);
        console.log(commnetObject.body);
        console.log(commnetObject.date);

        let newComment = [...comment, commnetObject];
        setCommnet(newComment);
    };
    let deleteTodo = (indexToDelete) => {
        let newComment = comment.filter(function (val, index) {
            if (indexToDelete == index) {
                return false;
            }
            return true;
        });
        setCommnet(newComment);
    };
    return (
        <div className="comment">
            <h1>Comment</h1>
            <form onSubmit={addComment}>
                <input type="text" name="title" placeholder="Enter Commnet Title" />
                {/* <input type="text" name="body" placeholder="Enter Comment Body"/> */}
                <input type="text" name="author" placeholder="Enter Commnet Author" />
                <div className="date">
                    <label>Enter the Date : </label>
                    <input type="date" name="date" /></div>
                <br />
                <textarea name="body" rows="4" placeholder="Comment..."></textarea>
                <br />
                <button className="commentBtn">Add</button>
            </form>
            <div className="border">
            {comment.map((val, index) => {
                return (
                    <div className="" >
                        <div className="object">
                       <li> Comment Title : <span> {val.title}</span></li>
                        <li>Comment Author: <span> {val.author}</span></li>
                        <li>Comment Date : <span> {val.date}</span></li>
                        <li>Comment Body: <span> {val.body}</span></li>
                        </div>
                        
                        <div className="display">
                        <button className="deleteBtn" onClick={() => {
                            deleteTodo(index);
                        }}>Delete</button>
                        </div>
                        
                    </div>
                );
            })}
            </div>
            
        </div>
    )
}
export default Comment;