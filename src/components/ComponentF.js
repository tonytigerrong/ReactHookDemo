import React,{useContext } from 'react'
import {FNameContext,LNameContext} from '../App'
export default function ComponentF() {
    const fname = useContext(FNameContext);
    const lname = useContext(LNameContext);
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
            {fname},{lname}
        </div>
    )
}
