import { useEffect, useState } from "react";

const Comment = ({commentData:comment, editFunc, deleteFunc}) => {
    const [editForm, setEditForm] = useState(false);
    const [editVal,setEditVal] = useState();
    
    useEffect(()=>{
        setEditVal(comment.comment);
    },[editForm]);

    return ( 
        <div className="comment">
            <p>{comment.comment}</p>
            <h2>This comment was posted by: {comment.postedBy}</h2>
            <button onClick={()=>deleteFunc(comment.id)}>Remove Comment</button>
            <button onClick={()=>setEditForm((ef) => !ef)}>Edit Comment</button>
            {editForm && (
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    setEditForm(false);
                    editFunc(comment.id,editVal);
                }}>
                    <input type="text" name="edited" id="" placeholder="edit comment" value={editVal} onChange={(e)=>setEditVal(e.target.value)}/>
                    <button type="submit">Edit</button>
                </form>
            )}
        </div> 
     );
}
 
export default Comment;