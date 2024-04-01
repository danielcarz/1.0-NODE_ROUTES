import { useEffect, useState } from 'react'
import axios from 'axios'; 

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3007";

function App() {
  const [name, setNames] = useState('');

  useEffect( () => {

    createRequest();

  }, [] )

  const createRequest = async ( ) => {

    const getData = await fetch( `${ URL }/users` );
    const converDataToJson = await getData.json();

    console.log(converDataToJson);

    return converDataToJson;

  }

  const sendUser = (e ) => {

    e.preventDefault();

    axios.post( `${ URL }/users`, { name } )
      .then( res => {
        //setNames( [ ...names, res.data ] )
        console.log(res.data);
      } )
      .catch( err => console.error(err) )
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

      <form onSubmit={ sendUser }>
        <input type='text' placeholder='name' value={name} onChange={ (e) => setNames(( e.target.value ))} ></input>
        <button type='submit'>Crear una solicitud Post</button>
      </form>
    </>
  )
}

export default App
