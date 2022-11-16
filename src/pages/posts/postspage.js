import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './postspage.scss';


const PostsPage=()=>{
    const[posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json=> setPosts(json))
    },[])


    return(
        <ol className='posts'>
            {posts.map(post=> (
                <li><Link key={post.id} to={`/posts/${post.id}`}>{post.title} </Link></li>)
            )}
        </ol>
    )
}

export default PostsPage