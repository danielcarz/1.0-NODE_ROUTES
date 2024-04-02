import React, { useContext } from "react";

//contex
import { Contex } from "../Hooks/CreateContex";

export const RouteOne = () => {

    const { getHttpUsers, sendHttpUser } = useContext( Contex );

    return(
        
        <div>

            <button onClick={ getHttpUsers } > Create a HTTP request </button>

           <form onSubmit={ sendHttpUser }>
                {/* <input type='text' placeholder='name' value={name} onChange={ (e) => setNames(( e.target.value ))} ></input> */}
                <button type='submit'>Crear una solicitud Post</button>
            </form>  

        </div>
    )
} 