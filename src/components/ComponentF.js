import React from 'react'
import {FNameContext,LNameContext} from '../App'
export default function ComponentF() {
    return (
        <div>
            <FNameContext.Consumer>
                {
                    fname => {

                        return (
                            <LNameContext.Consumer>
                                {
                                    lname =>{
                                        return <div>User context value {fname}, {lname}</div>
                                    }
                                }
                            </LNameContext.Consumer>
                        )
                    }
                }
            </FNameContext.Consumer>
        </div>
    )
}
