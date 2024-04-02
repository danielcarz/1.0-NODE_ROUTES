import React, { useContext } from "react";

//contex
import { Contex } from "../Hooks/CreateContex";

export const RouteOne = () => {

    const { test } = useContext( Contex );

    return(
        <h1> { test } </h1> 
    )
} 