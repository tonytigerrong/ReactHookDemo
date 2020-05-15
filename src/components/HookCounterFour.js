import React,{useState} from 'react'

function HookCounterFour() {
    const initItem = [{
        id: 0,
        value: 0
    }];
    const [items, setItems] = useState(initItem);
    const addItem = () => {
        setItems(
            [...items,
                {
                    id: items.length,
                    value:Math.floor(Math.random()*10) 
                }]
        )
    }
    return (
        <div>
            <button onClick={addItem}>add Item</button>
            <ul>
                {
                    items.map( item => {
                          return <li key={item.id}> {item.value} </li>
                    })
                }
            </ul>
        </div>
    )
}

export default HookCounterFour
