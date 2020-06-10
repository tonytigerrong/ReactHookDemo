import React,{useState,useCallback } from 'react'
import Counter from './Counter'
import Button from './Button'
export default function ParentComponent() {
    const [age, setAge] = useState(21)
    const [salary, setSalary] = useState(50000)
    const incrementAge = useCallback(()=>{
        setAge(age+1)
    },[age]) // age is dependency, the function rerendered,only when the dependency changed 
    const incrementSalary = useCallback( ()=>{
        setSalary(salary+1000)
    },[salary])
    return (
        <div>
            <Counter text='age' count={age}/>
            <Button handleClick={incrementAge}>increment age</Button>
            <Counter text='salary' count={salary}/>
            <Button handleClick={incrementSalary}>increment salary</Button>
        </div>
    )
}
