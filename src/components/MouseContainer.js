import React,{useState, useEffect } from 'react'
import HookClassMouse from './HookClassMouse'

function MouseContainer() {
 
    const [display, setDisplay] = useState(true)


    const changeDisplay = (d)=>{
        setDisplay(d)
        console.log(display)
    }

    return (
        <div>
            <button onClick={()=>{changeDisplay(!display)}}>toggle display</button>
            { display && <HookClassMouse />}
        </div>
    )
}

export default MouseContainer
