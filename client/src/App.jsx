import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3007";

function App() {
  const [count, setCount] = useState(0);

  useEffect( () => {

    createRequest();

  }, [] )

  const createRequest = async ( ) => {

    const getData = await fetch( `${ URL }/users` );
    const converDataToJson = await getData.json();

    console.log(converDataToJson);

    return converDataToJson;

  }


  

  return (
    <>
     <h1>Aplication to Practice Routing with Express</h1>
      

    {/*  <button onClick= { async () => { 

        const res = await fetch (`${ URL }/user`);    
        const resToJson = await res.json();

        console.log( resToJson );

      } }> Users </button> */}

      <button > Create a GET request </button>
    </>
  )
}

export default App
