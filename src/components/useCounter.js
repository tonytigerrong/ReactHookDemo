import {useState} from 'react'

export default function useCounter(init) {
    const [count, setCount] = useState(init)
    const inc = ()=>{
        setCount(pre=>pre+1)
    }
    const dec = ()=>{
        setCount(pre=>pre-1)
    }
    return [count,inc,dec]
}
