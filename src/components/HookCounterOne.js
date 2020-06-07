import React,{ useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')
    // componentDidMount DidUpdate 
    useEffect(()=>{
        console.log("useEffect - update title")
        document.title = `You clicked ${count} time`;
    },[count,name]);
    return (
        <div>
            <input type="text" onChange={
                (e)=>{
                    setName(e.target.value)
                }
            }/>
            <button onClick={
                ()=> setCount(count+1)
            }>click {count} times</button>
        </div>
    )
}

export default HookCounterOne
