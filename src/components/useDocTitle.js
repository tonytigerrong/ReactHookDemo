import { useEffect } from 'react'
/**
 * custom hook
 * @param {*} count 
 */
export default function useDocTitle(count) {
   useEffect(()=>{
    document.title = `Count - ${count}`
   },[count])
}
