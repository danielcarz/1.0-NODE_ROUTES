const express = require('express');
const { validationResult } = require('express-validator')

const users = [];
console.log(users)

const showUsers = ( req, res ) => {
    res.json( { mjs: "object get Users" })
}

const createUser = ( req, res ) => {


   const { name, email, password } = req.body;
 
   
   //validation errors

   const errors = validationResult( req );
   console.log( errors )

   if( !errors.isEmpty() ){

    return res.status(400).json( { 

        ok: false,
        msj: errors.mapped()

     } )
   }
   

   
  return res.status(201).json( { ok: true, name , email, password } )
    //res: req.body  
}


const deleteUser = ( req, res ) => {
    res.json( { mjs: 'object deleteUser' })
}

module.exports = {

    showUsers,
    createUser,
    deleteUser

}