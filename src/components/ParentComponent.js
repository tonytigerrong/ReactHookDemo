import React,{useState } from 'react'
import Counter from './Counter'
import Button from './Button'
export default function ParentComponent() {
    const [age, setAge] = useState(21)
    const [salary, setSalary] = useState(50000)
    const incrementAge = ()=>{
        setAge(age+1)
    }
    const incrementSalary = ()=>{
        setSalary(salary+1000)
    }
    return (
        <div>
            <Counter text='age' count={age}/>
            <Button handleClick={incrementAge}>increment age</Button>
            <Counter text='salary' count={salary}/>
            <Button handleClick={incrementSalary}>increment salary</Button>
        </div>
    )
}
