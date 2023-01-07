import { useState } from "react";

const Post = ({onPost}) => {

    let [name,setName] = useState("");
    let [message,setMessage] = useState("");

    return ( 
       <form onSubmit={(e)=>{
            e.preventDefault();
            if(!name || !message ) return;
            onPost(name, message);
       }}>
            <input required onChange={e=> {setName(e.target.value)}} type="text" name="username" id="name" placeholder="Your name . . ." />
            <textarea required onChange={e => {setMessage(e.target.value)}}name="comment" id="comments" cols="30" rows="10" placeholder="Comment . . ." style={{resize:'none'}}></textarea>
            <button type="submit">Post</button>
       </form>
    );
}
 
export default Post;