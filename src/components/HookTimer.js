import React,{useEffect,useState,useRef} from 'react'

export default function HookTimer() {
    const [timer,setTimer]=useState(0)
    const interval = useRef()

    useEffect(()=>{
        interval.current = setInterval(()=>{
            setTimer(preTimer=>preTimer+1)
        },1000)
        return ()=>{
            clearInterval(interval.current)
        }
    },[timer])

    return (
        <div>HookTimer:
            {timer}-<button onClick={()=>{
                //clearInterval(this.interval), this.interval is not gloable var, which is inside in useEffect function
                clearInterval(interval.current)
            }}>clear timer</button>
        </div>
    )
}
