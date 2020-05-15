import React,{useState} from 'react'

function HookCounter() {
    {/*
        Rules of Hooks
        1. only call hooks at the top level
        2. only call hooks from react funcation
        3. don't call hooks inside loops,condition, nested functions
    */}
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={
                ()=>{
                    setCount(count+1)
                }
            }>click {count} times</button>
        </div>
    )
}

export default HookCounter
