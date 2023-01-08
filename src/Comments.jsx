import Comment from "./Comment";
const Comments = ({commentList: list, deleteFunc, editFunc}) => {

    const reversed = [...list].reverse();
    return ( 

        <div>
            <h2>Comment Sections:</h2>
            <div className="comment-container">
                {reversed.map(comment => (
                    <Comment key={comment.id} commentData={comment} editFunc={editFunc} deleteFunc={deleteFunc}/>

                ))}
            </div>
        </div>
     );
}
 
export default Comments;