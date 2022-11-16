 import React from "react";
 import { useEffect, useState } from 'react';

 import { useParams } from "react-router-dom";
 import './post.css';


 const Post =()=>{
    console.log(useParams())
    const postId = useParams();

    const[post, setPost] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId.id}`)
        .then(response => response.json())
        .then(json=> setPost(json))
    },[])

    return(
        <div className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    ) 
 }

 export default Post