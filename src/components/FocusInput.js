import React,{useRef,useEffect} from 'react'

export default function FocusInput() {
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input ref={inputRef} />
        </div>
    )
}
