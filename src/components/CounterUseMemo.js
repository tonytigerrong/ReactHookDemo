import React,{useMemo,useState} from 'react'

export default function CounterUseMemo() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const incrementOne = ()=>{   
        setCountOne(countOne+1)
    }
    const incrementTwo = ()=>{
        setCountTwo(countTwo+1)
    }
    // const isEven = ()=>{
    //     let i=0;
    //     while(i<4000000000) i++;
    //     return countOne % 2 == 0 
    // }


    //use useMemo can make increment two button clicking fast,
    //since increment two button click will re-render the page including isEven funtion
    //if we useMemo the isEven function, then isEven will not reload when increment two button click
    const isEven = useMemo(()=>{
        let i=0;
        while(i<4000000000) i++;
        return countOne % 2 == 0 ;
    },[countOne])
    return (
        <div>
            <button onClick={incrementOne}>increment one{countOne}</button><span>{isEven  ?'Even' : 'Odd'}</span>
            <button onClick={incrementTwo}>increment two{countTwo}</button>
        </div>
    )
}
