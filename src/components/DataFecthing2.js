import React,{useState,useEffect } from 'react'
import axios from 'axios'
export default function DataFecthing2() {

    const [post, setPost]=useState({})
    const [id, setId]=useState()
    const [idFromBtnClick, setIdFromBtnClick] = useState(1)

    const handlerClick = ()=>{
        setIdFromBtnClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
        .then(resp=>{
            console.log(resp.data)
            setPost(resp.data)
        }).catch(err=>console.log(err))
    },[idFromBtnClick])
    return (
        <div>
            <input value={id} onChange={ e=> setId(e.target.value)} />
            <button typ='button' onClick={handlerClick}>fetchData</button>
            {post.title}
        </div>
    )
}
