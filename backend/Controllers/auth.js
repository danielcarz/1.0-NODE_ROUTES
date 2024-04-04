const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//const { validationResult } = require('express-validator')

const userSchema = require('../models/modelUser.js');

const users = [];
console.log(users)

//show users
const showUsers = ( req, res ) => {
    res.json( { mjs: "object get Users" })
}

//create user
const createUser = async ( req, res ) => { 

   const { name, email, password } = req.body;

   try { 
        let newUser = await  userSchema.findOne( { email } );

        if( newUser ){

                return res.status(400).json( {
 
                    ok: false,

                    mjs: 'el correo ya existe'
                } )
        }

        
        
        
        //intance: save user to database 
        newUser = await new userSchema( req.body  );
        
        
        //password encripted
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync( password, salt );

        await newUser.save();
       
        
        
        return res.status(201).json( { ok: true, body: newUser.id, userName: newUser.name } )
            

   } catch (error) {

    console.error('Error al guardar en la base de datos:', error);
    return res.status(500).json({ error: 'Error al guardar en la base de datos' });
    
   }
 
}

//login user
const loginUser = ( req, res) => {

    const { name, password } = req.body


    return res.status(201).json( { ok: true, mjs: "user logged" } )
}

//delete user
const deleteUser = ( req, res ) => {
    res.json( { mjs: 'object deleteUser' })
}

module.exports = {

    showUsers,
    createUser,
    loginUser,
    deleteUser

}