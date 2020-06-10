import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import { CountContext } from '../App'

export default function ComponentE() {
    const countContext = useContext(CountContext);
    
    return (
        <div>
            <ComponentF />
            <button onClick={()=>{
                countContext.countDispatch('inc')
            }}>inc(inComponentE)</button>
        </div>
    )
}
