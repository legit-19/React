import React from 'react'
import { useState , useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numbedallowed, setnumbedallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")

  // use useRef hooks for referane
  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(() =>{
    let pass = ''
    let str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZYabcdefghijklmnopqrstyvwxyz"
    if(numbedallowed) str+='0123456789'
    if(charallowed) str+='!@#$%^&*()_{}[]~`'

    for(let i=1; i<=length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length,numbedallowed,charallowed,password])

  const copypasswordtoclipboard = useCallback(()=>{
    passwordRef.current?.select(password)
    passwordRef.current?.setSelectionRange(0,6)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordgenerator();
  },[length,numbedallowed,charallowed])


  return (
    <>
      <div>
        <h1 className='text-4xl text-center text-white my-3'>PASSWORD-GENERATOR</h1> 
        <div className='w-full max-w-xl h-20 mx-auto shadow-2xl rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
          <div className='flex shadow-xl rounded-lg overflow-hidden  bg-white '>
            <input 
              type='text'
              value={password}
              placeholder='password'
              className='outline-none w-full py-1 px-1'
              readOnly
              ref={passwordRef}
            ></input>
            <button onClick={copypasswordtoclipboard} className='bg-blue-800 text-white outline-none px-3 py-0.5 shrink-0'>copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                type='range'
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setlength(e.target.value)}}
              >
              </input>
              <label>Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type='checkbox'
                defaultChecked={numbedallowed}
                id='numberinput'
                onChange={(e)=>{setnumbedallowed((prev => (!prev)));
                }}
              >
              </input>
              <label htmlFor='numberinput'>Number</label>
            </div>
              
            <div className='flex items-center gap-x-1'>
              <input 
                type='checkbox'
                defaultChecked={charallowed}
                id='charinput'
                onChange={(e)=>{setcharallowed((prev => (!prev)));
                }}
              >
              </input>
              <label htmlFor='charinput'>Character</label>
            </div>
          </div> 
            
        </div> 
      </div>
      
    </>
  )
}

export default App
