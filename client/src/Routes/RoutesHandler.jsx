import React from "react";

import {  Routes, Route, } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

//routes
import { RouteOne } from './1.0-RouteOne.jsx';


export const RoutesHandler = () => {


    return( 

        <BrowserRouter>
        
            <Routes>

                <Route path = '/' element = { <RouteOne> </RouteOne> }></Route>

            </Routes>
        
        </BrowserRouter>



    )

}