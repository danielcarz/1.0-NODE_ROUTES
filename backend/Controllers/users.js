//const express = require('express');

const users = [];
console.log(users)

const Users = ( req, res ) => {
    res.json( { mjs: "object get Users" })
}

const sendUser = ( req, res ) => {


   const { name, email, number } = req.body;

   //validator
   if(name.length <= 3 ){

    return res.status(400).json({
        of: false,
        mjs: "the name must have more than 4 letters"
    })
   }

   return res.json( { ok: true, msj: "send",  res: req.body } ); 
}

const deleteUser = ( req, res ) => {
    res.json( { mjs: 'object deleteUser' })
}

module.exports = {

    Users,
    sendUser,
    deleteUser

}