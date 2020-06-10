import React, { useReducer } from 'react'


const initialState = 0
const reducer = (state,action)=>{
    switch(action){
        case 'inc':
            return state +1;
        case 'dec':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function CountTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
    return (
        <div>
            Count-{count}
            <button onClick={()=>{
                dispatch('inc')
            }}>inc</button>
            <button onClick={()=>{
                dispatch('dec')
            }}>dec</button>
            <button onClick={()=>{
                dispatch('reset')
            }}>reset</button>

            CountTwo-{countTwo}
            <button onClick={()=>{
                dispatchTwo('inc')
            }}>inc</button>
            <button onClick={()=>{
                dispatchTwo('dec')
            }}>dec</button>
            <button onClick={()=>{
                dispatchTwo('reset')
            }}>reset</button>
        </div>
    )
}
