import { useEffect, useState } from "react";

const Comment = ({commentData:comment, editFunc, deleteFunc}) => {
    const [editForm, setEditForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [removing, setRemoving] = useState(false);
    const [editVal,setEditVal] = useState("");
    
    useEffect(()=>{
        setEditVal(comment.comment);
    },[editForm]);

    return ( 
        <div className="comment">
            {removing && (<p>Removing . . .</p>)}
            <p>{comment.comment}</p>
            <h2>This comment was posted by: {comment.postedBy}</h2>
            <button onClick={()=>{
                setRemoving(true);
                deleteFunc(comment.id);
            }} disabled={removing} >Remove Comment</button>

            <button onClick={()=>setEditForm((ef) => !ef)} disabled={removing || loading }>Edit Comment</button>
            {editForm && (
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    setLoading(true);
                    setEditForm(false);
                    editFunc(comment.id,editVal,()=>setLoading(false));
                }}>
                    <input type="text" name="edited" id="" placeholder="edit comment" value={editVal} onChange={(e)=>setEditVal(e.target.value)}/>
                    <button type="submit">Edit</button>
                </form>
            )}
        </div> 
     );
}
 
export default Comment;