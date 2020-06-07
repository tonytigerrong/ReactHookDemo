import React,{useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const tick = ()=>{
        // setCount(count+1);
        // or we can use precount to avoid add dependency array to useEffect
        setCount(precount => precount+1)
    }

    useEffect(()=>{
        console.log('start effect')
        const interval = setInterval(tick,1000)
        return ()=>{
            console.log('end effect')
            clearInterval(interval)
        }
    },[]) // the 2nd parameter is dependency array, indicate when we run useEffect


    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
