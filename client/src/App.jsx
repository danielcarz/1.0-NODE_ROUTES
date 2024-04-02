import { useEffect, useState } from 'react'
import axios from 'axios'; 


import './App.css'

import { ContexProvider } from '../src/Hooks/ContexProvider.jsx';

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3007";

//route handler
import { RoutesHandler } from './Routes/RoutesHandler.jsx';

function App() {
  //const [name, setNames] = useState('');

 /*  useEffect( () => {

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
 */

  

  return (
    <ContexProvider>

     {/*  <h1>Aplication to Practice Routing with Express</h1> */}

      <RoutesHandler></RoutesHandler>
      

 
      {/* <button > Create a HTTP request </button>

      <form onSubmit={ sendUser }>
        <input type='text' placeholder='name' value={name} onChange={ (e) => setNames(( e.target.value ))} ></input>
        <button type='submit'>Crear una solicitud Post</button>
      </form> */}
    </ContexProvider>
  )
}

export default App
