import React, { useContext} from "react";

//context
import { Contex } from './CreateContex.jsx';

import { useHandleHttp } from './CustomHooks/index.js';

export const ContexProvider = ( { children } ) => {

    const { getHttpUsers, sendHttpUser } = useHandleHttp( );

    return(

        <Contex.Provider value = { { getHttpUsers, sendHttpUser } }>

            { children }

        </Contex.Provider>
 
    )
}