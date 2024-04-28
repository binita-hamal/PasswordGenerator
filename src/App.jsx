import './index.css'
import './App.css'
import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8)//to track length ko value

  const [numberAllowed, setNumberAllowed] = useState(false)

  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState('')

  //let's make how to generate password

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed)
      str += '0123456789'
    if (charAllowed)
      str += "!@#$%^&*()_+"

    for (let i = 1; i < length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }
    , [length, numberAllowed, charAllowed, setPassword])



  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])

  const passwordRef=useRef(null)

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
      <h1 className='text-white  text-7xl text-center my-3 mt-64'>Password Generator</h1>

      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px- py-3 my-20 bg-gray-800 text-orange-500'>



        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-6 mx-2'>

          <input type='text'
            value={password}
            className='outline-none w-full py-2 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >Copy</button>

        </div>


        {/* div for the range and length and numbers and characters */}

        <div className='flex text-sm gap-x-2 mx-2'>


          <div className='flex items-center gap-x-1'>
            <input type='range'
              min={6}
              max={100}
              name=""
              id=""
              value={length}
              className='cursor-pointer text-lg'
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor='length' className='text-lg'>Length: {length}</label>
          </div>


          <div className='flex items-center gap-x-2'>
            <input type='checkbox'
              className='text-lg'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}

            />
            <label htmlFor='numbers'
              className='text-lg'
            >Numbers</label>

          </div>



          <div className='flex items-center gap-x-2'>
            <input type='checkbox'
              className='text-lg'
              defaultChecked={charAllowed}
              onChange={()=>{
                setCharAllowed((prev)=> !prev)
              }}

            />
            <label
              className='text-lg'
            >Characters</label>

          </div>

        </div>




      </div>




    </>
  )
}

export default App
