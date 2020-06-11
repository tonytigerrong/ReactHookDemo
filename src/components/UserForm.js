import React,{useState} from 'react'
import useInput from './useInput'
export default function UserForm() {
    // const [fname,setFname]=useState()
    // const [lname,setLname]=useState()
    const [fname,bindFname,resetFname] = useInput()
    const [lname,bindLname,resetLname] = useInput()

    const submitHandler = (e)=>{
        e.preventDefault();
        alert(`fname-${fname}, lname-${lname}`)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>FirstName</label>
                <input {... bindFname} type='text'/>
                <label>LastName</label>
                <input type='text' {...bindLname} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
