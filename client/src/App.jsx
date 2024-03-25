import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3007";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> MERN APP</h1> 

     <button onClick= { async () => { 

        const res = await fetch (`${ URL }/user`);    
        const resToJson = await res.json();

        console.log( resToJson );

      } }> Users </button>
    </>
  )
}

export default App
