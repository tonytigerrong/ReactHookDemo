import React,{ useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    // componentDidMount DidUpdate 
    useEffect(()=>{
        document.title = `You clicked ${count} time`;
    });
    return (
        <div>
            <button onClick={
                ()=> setCount(count+1)
            }>click {count} times</button>
        </div>
    )
}

export default HookCounterOne
