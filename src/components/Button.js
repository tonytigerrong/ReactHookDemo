import React from 'react'

function Button({handleClick, children}) {
    console.log('Render button - ', children)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}
export default Button
