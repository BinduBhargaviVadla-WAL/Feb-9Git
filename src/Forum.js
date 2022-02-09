import PropTypes from "prop-types"
import { useState } from "react";
const Forum = (props) => {
    let [comment,setCommnet] = useState([]); 
    const addComment = (event) => {
        event.preventDefault();
        let commnetObject = {
            comment: event.target.comment.value,
            author: event.target.author.value,
        };
        console.log(commnetObject.author);
        console.log(commnetObject.comment);
        
        let newComment = [...comment,commnetObject];
        setCommnet(newComment);
    };
    let deleteTodo = (indexToDelete) =>{
        let newComment = comment.filter(function(val,index){
            if(indexToDelete == index){
                return false;
            }
            return true;
        });
        setCommnet(newComment);
    };
    
    return (
        <div className="forum">
            <h1>{props.topic}</h1>
            <form onSubmit={addComment}>
                <textarea name="comment" rows="4" placeholder="Reply..."></textarea><br/>
                <input type="text" name="author" placeholder="Enter Your Name"/><br/>
                <button className="btn">Add Comment</button>
            </form>
            <div className="">
            {comment.map((val,index) =>{
                return(
                    <div className="reply">
                        <span>Replay :</span> {val.comment}<br/>
                        <span>Replay Author:</span>{val.author}<br/>
                        <button className="delBtn" onClick={()=>{
                            deleteTodo(index);
                        }}>Delete</button>
                    </div>
                );
            })}
            </div>
            
        </div>
    );
}
Forum.propTypes={
    topic:PropTypes.string,
};
export default Forum;