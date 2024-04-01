//const express = require('express');


const Users = ( req, res ) => {
    res.json( { mjs: "object get Users" })
}

const sendUser = ( req, res ) => {
    res.json( { mjs: 'object send user' } )
}

const deleteUser = ( req, res ) => {
    res.json( { mjs: 'object deleteUser' })
}

module.exports = {

    Users,
    sendUser,
    deleteUser

}