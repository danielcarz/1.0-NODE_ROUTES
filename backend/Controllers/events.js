//REQUIREMENTS
const express = require('express');

const eventTest = ( req, res ) => {

    res.json( {
        
        ok: true, 
        mjs: 'from event'} 
    
    )

};

module.exports = {

    eventTest,
}