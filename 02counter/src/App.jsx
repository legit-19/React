import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [count,setCount] = useState(0)
  // let count = 0;
     const Addnumber = () =>{
         
      if(count<20)
      {
      setCount(count+1);
      }
     }


     const Removenumber = () => {
      if(count>0)
      {
        setCount(count -1);
      }
     }

     const Goal = () => {
      // count=0;
      setCount(0);
      
     }

  return (
    <>
     
     <div>
        <h1>Counter App</h1>
        <h2 id='value'>counte value: {count}</h2> 

        <button onClick={Addnumber}>ADD VALUE</button>  
        <button onClick={Removenumber} >REMOVE VALUE</button>
        <button onClick={Goal}>Starting</button>      
     </div>
     
    </>
  )
}

export default App
