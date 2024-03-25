import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> MERN APP</h1> 

     <button onClick= { async () => { 

        const res = await fetch (`${ import.meta.env.VITE_BACKEND_URL}`);    
        const resjson = await res.json();

        console.log( resjson );

      } }> Users </button>
    </>
  )
}

export default App
