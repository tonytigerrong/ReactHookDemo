import React,{useState, useEffect } from 'react'
import axios from 'axios'
export default function FetchDataOne() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [error, setError] = useState()

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((resp)=>{
                setLoading(false)
                setPost(resp.data)
                setError(null)
            })
            .catch((err)=>{
                setLoading(false)
                setPost({})
                setError('something err!')
            })
    },[])

    return (
        <div>
            {loading ? 'loading' : post.title}
            
            {error ? error : '' }
        </div>
    )
}
