import React, { useContext} from "react";

//context
import { Contex } from './CreateContex.jsx';

export const ContexProvider = ( { children } ) => {

    const test = 'testing variable'

    return(

        <Contex.Provider value = { { test } }>

            { children }

        </Contex.Provider>
 
    )
}