import React,{useState, useEffect} from 'react'
import useDocTitle from './useDocTitle'

export default function DocTitleTwo() {
    const [count,setCount] = useState(0)
    // useEffect(()=>{
    //     document.title = `Count - ${count}`
    // },[count])
    useDocTitle(count) //custom hook
    return (
        <div>
            <button onClick={
                ()=>{
                    setCount(pre=>pre+1)
                }
            } >Count - {count}</button>
        </div>
    )
}
