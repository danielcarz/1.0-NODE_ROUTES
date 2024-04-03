const express = require('express');
const { validationResult } = require('express-validator')

const users = [];
console.log(users)

//show users
const showUsers = ( req, res ) => {
    res.json( { mjs: "object get Users" })
}

//create user
const createUser = ( req, res ) => {

   const { name, email, password } = req.body;

  return res.status(201).json( { ok: true, name , email, password } )
    //res: req.body  
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