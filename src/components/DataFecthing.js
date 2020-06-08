import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function DataFecthing() {
    const [posts, setPosts] =  useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp=>{
                // console.log(resp)
                setPosts(resp.data)
            })
            .catch(err=>{
                console.log(err)
            })
    })

    return (
        <div>
            <ul>
                { posts.map( 
                    post =>  
                        <li key={post.id}>{post.title}</li>
                     
                )}
            </ul>
        </div>
    )
}
