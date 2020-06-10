import React, {useReducer} from 'react'


export default function CountOne() {
    const initialState = {
        firstCount: 0,
        secondCount: 0
    };
    const reducer = (state, action)=>{
        switch(action.type){
            case 'increment':
                if(action.seg==1)
                    return {...state,firstCount: state.firstCount+1};
                else
                    return {...state,secondCount: state.secondCount+1}
            case 'decrement':
                if(action.seg==1)
                    return {...state,firstCount: state.firstCount-1};
                else
                    return {...state,secondCount: state.secondCount-1}
            case 'reset':
                return initialState;
            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)
    

    return (
        <div>
            Count.firstCount-{count.firstCount} - Count.secondCount-{count.secondCount}
            <button onClick={()=>{dispatch({type:'increment', seg:1})}}>increment.firstCount</button>
            <button onClick={()=>{dispatch({type:'decrement', seg:1})}}>decrement.firstCount</button>
            <button onClick={()=>{dispatch({type:'reset', seg:1})}}>reset.firstCount</button>
<br/>
            <button onClick={()=>{dispatch({type:'increment', seg:2})}}>increment.secondCount</button>
            <button onClick={()=>{dispatch({type:'decrement', seg:2})}}>decrement.secondCount</button>
            <button onClick={()=>{dispatch({type:'reset', seg:2})}}>reset.secondCount</button>
        </div>
    )
}
