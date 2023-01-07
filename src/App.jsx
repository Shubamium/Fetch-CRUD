import { useEffect, useState } from "react";
import Comments from "./Comments";

const App = () => {
    let [comments, setComments] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        const response = await fetch("http://localhost:3000/comments");
        const data = await response.json();
        setComments(data);
        // console.log(data);
    }    
    return ( 
        <div>
            Hi this is my app!
            <Comments commentList={comments}/>
        </div> 
    );
}
 
export default App;