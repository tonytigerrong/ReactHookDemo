import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const increFive = ()=>{
        for(let i=0; i<5; i++){
            setCount(preCount => preCount+1)
        }
    }
    return (
        <div>
            Count:{count}
            <button onClick={
                ()=>setCount(
                    initialCount
                )
            }>Reset</button>
            <button onClick={
                ()=>setCount(
                    preCount => preCount+1
                )
            }>Increment</button>
            <button onClick={
                ()=>setCount(
                    preCount => preCount-1
                )
            }>Decrement</button>
            <button onClick={
               increFive
            }>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo
