import React from "react";
import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3007";

export const useHandleHttp = () => {

    const getHttpUsers = async () => {


        const getData = await fetch( `${ URL }/users` );
        const converDataToJson = await getData.json();
    
        console.log(converDataToJson);
    
        return converDataToJson;
    }

    const sendHttpUser = (e ) => {
 
        e.preventDefault();
    
        axios.post( `${ URL }/users`, { name } )
    
          .then( res => {
    
            //setNames( [ ...names, res.data ] )
            console.log(res.data);
          } )
          .catch( err => console.error(err) )
      }


    return {

        getHttpUsers,
        sendHttpUser,

    }
}

 
