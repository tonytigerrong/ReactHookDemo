import React, {useState} from 'react'

export default function useInput(init) {
   const [value,setValue]=useState(init)
   const reset = ()=>{
       setValue(init)
   }
   const bind = {
       value,
       onChange: e=>{setValue(e.target.value)}
   }

   return [value,bind,reset]
}

