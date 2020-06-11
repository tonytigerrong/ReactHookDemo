import React from 'react'
import useCounter from './useCounter'
export default function CounterTwo() {
    const [count,inc,dec] = useCounter(0)

    return (
        <div>
            Count = {count}
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    )
}
