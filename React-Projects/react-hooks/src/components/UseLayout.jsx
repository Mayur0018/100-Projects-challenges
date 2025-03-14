import React from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
export default function UseLayout() {
    useEffect(()=>{
        console.log("If You Can Do Anythings On Your Life");
    })
    useLayoutEffect(()=>{
        console.log("Focus On  Your GoalS Not Halles");
        
    })
  return (
    <div>
        {Array(40000).fill("").map((item,index)=>(
            <li key={index}>{Math.pow(Math.random(),10 )}</li>
        ))}
         <h1>Hey Im Mayur Nishad</h1>
    </div>
  )
}
