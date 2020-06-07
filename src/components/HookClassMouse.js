import React , {  useState, useEffect} from 'react'

function HookClassMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect( ()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition);
        // add a return function, the function will be called when unmount component itself
        return ()=>{
            console.log('unmout useEffect')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[] ) // the empty array [] means, the useEffect will only be called once

    return (
        <div>
            X: {x}, Y:{y}
        </div>
    )
}

export default HookClassMouse
