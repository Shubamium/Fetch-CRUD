const Comments = ({commentList: list}) => {
    return ( 

        <div>
            <h2>Comment Sections:</h2>
            <div className="comment-container">
                {list.map(comment => (
                    <div key={comment.id} className="comment">
                        <p>{comment.comment}</p>
                        <h2>This comment was posted by: {comment.postedBy}</h2>
                    </div> 
                ))}
            </div>
        </div>
     );
}
 
export default Comments;