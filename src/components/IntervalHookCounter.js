import React,{useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const [otherProps, setOtherProps] = useState(null)
    const tick = ()=>{
        // setCount(count+1);
        // or we can use precount to avoid add dependency array to useEffect
        setCount(precount => precount+1)
    }

    useEffect(()=>{
        //if we call a function in useEffect, we should include the function definition into
        //useEffect, so we won't forget add the props value into dependency array
        function doSomething(){
            console.log(otherProps);
        }
        console.log('start effect')
        const interval = setInterval(tick,1000)
        return ()=>{
            console.log('end effect')
            clearInterval(interval)
        }
    },[
        // count,
        otherProps
    ]) // the 2nd parameter is dependency array, indicate when we run useEffect


    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
