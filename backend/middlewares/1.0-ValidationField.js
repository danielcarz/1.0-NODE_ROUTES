//REQUIREMENTS
const express = require('express');

const { validationResult } = require('express-validator'); //express validator



const validationField = ( req, res, next ) =>{

    //validation errors
    const errors = validationResult( req );
     //console.log( errors )  
    
    if( !errors.isEmpty() ){
        
        return res.status(400).json( {

            ok:false,
            mjss: errors.mapped()
        } )
    }

    // call next middleware
    next();

}

module.exports = {

    validationField

}
