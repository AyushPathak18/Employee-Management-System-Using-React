import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)
  //let counter=5
  
  const addvalue = () => {
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
  }
  const deletevalue = () => {
     counter=counter-1
     setCounter(counter)
  }
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Chai Aur React</h1>
      <h2>Counter value :{counter}</h2>

      <button
      onClick={addvalue}
      >Add value</button>
      <br />
      <button
      onClick={deletevalue}
      >reomve value</button>
    </>
  )
}

export default App
