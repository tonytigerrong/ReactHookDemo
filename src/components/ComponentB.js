import React,{useContext} from 'react'
import { CountContext } from '../App'

export default function ComponentB() {
    const countContext = useContext(CountContext)
    return (
         
        <div>
            ComponentB: {countContext.countState}
            <button onClick={()=>{
                countContext.countDispatch('inc')
            }}>inc</button>
            <button onClick={()=>{
                countContext.countDispatch('dec')
            }}>dec</button>
            <button onClick={()=>{
                countContext.countDispatch('reset')
            }}>reset</button>
        </div>
    )
}
