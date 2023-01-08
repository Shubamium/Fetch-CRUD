import { useEffect, useState } from "react";
import Comments from "./Comments";
import Post from "./Post";

const App = () => {
    let [comments, setComments] = useState([]);
    const getMaxCommentId = ()=>{
        let newId = comments.map((c)=> c.id);
        newId = Math.max(...newId) + 1;
    };
   
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const response = await fetch("http://localhost:3000/comments");
        const data = await response.json();
        setComments(data);
        // console.log(data);
    };

    const addComment = async(username, comment)=>{
        const newComment = {id:getMaxCommentId(), comment, postedBy: username};
        await fetch("http://localhost:3000/comments",{
            headers:{
                "Content-Type":"application/json"
            },
            method:"POST",
            body: JSON.stringify(newComment)
        })
        fetchData();
    };

    const delComment = async(id)=>{
        await fetch(`http://localhost:3000/comments/${id}`,{
            headers:{
                "Content-Type":"application/json"
            },
            method:"DELETE"
        });
        fetchData();
    };

    const editComment = async(id,edited)=>{
        await fetch(`http://localhost:3000/comments/${id}`,{
            headers:{
                "Content-Type":"application/json"
            },
            method:"PATCH",
            body:JSON.stringify({comment:edited})
        })
        fetchData();
    };

 
    return ( 
        <div>
            Hi this is my app!
            <Post onPost={addComment}/>
            <Comments commentList={comments} deleteFunc={delComment} editFunc={editComment}/>
        </div> 
    );
}
 
export default App;