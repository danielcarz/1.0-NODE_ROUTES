const express = require('express');
const { validationResult } = require('express-validator');

const validationField = ( req, res, next ) =>{

      //validation errors
      const errors = validationResult( req );

      if( !errors.isEmpty() ){
  
          return res.status(400).json( {
  
              ok:false,
              mjs: errors.mapped()
          } )
      }

    next();

}

module.exports = {

    validationField

}
