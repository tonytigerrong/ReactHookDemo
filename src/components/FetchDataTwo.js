import React,{useState, useEffect, useReducer} from 'react'
import axios from 'axios'
const reducer = (state, action)=>{
    switch(action.type){
        case 'success':
            return {
                loading: false,
                error: '',
                post: action.payload
                
            }
        case 'fail':
            return {
                loading: false,
                error: 'something wrong',
                post: {}
            }
        default:
            return state
    }
}
export default function FetchDataTwo() {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const init = { //we have to define state inner structure by init object
        loading: true,
        post: {},
        error: false
    }
    const [state, dispatch] = useReducer(reducer, init)
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
             .then((resp)=>{
                dispatch({type:'success',payload:resp.data})
                console.log('test:',resp.data)
             })
             .catch((error)=>{
                dispatch({
                    type:'fail',
                    payload:{}
                })
             })
    },[])
    
    return (
        <div>
             
            { state.loading ? 'loading' : state.post.title}
            { state.error ? state.error : ''}
        </div>
    )
}
