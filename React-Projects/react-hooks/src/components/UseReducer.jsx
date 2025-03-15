import React from 'react'
import { useReducer } from 'react'
export default function UseReducer() {
   const intialstate = {count : 0};
   const reducer = (state,action)=>{
      switch(action.type){
        case  "Increment": {
          return {count : state.count+ 1}
        }
        case "Decremnt" : {
          return {count : state.count - 1}
        } 
        case "input":{
          return {count : action.payload}
        }
      }
   }
 
  const [state,dispatch] = useReducer(reducer,intialstate);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=> dispatch({type: "Increment"})}>Increment</button>
      <button onClick={()=> dispatch({type:"Decremnt"})}>Decremnt</button>
      <input type="text" value={state.count} onChange={(e)=> dispatch({type: "input",payload: Number(e.target.value)  })} />
    </div>
  )
}
