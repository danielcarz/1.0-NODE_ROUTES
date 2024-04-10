//REQUIREMENTS
const express = require('express');


const eventTest = ( req, res ) => {

    const { uid, name } = req;
    

    res.json( 
        {
            
            ok: true, 
            nameUser: name,
            mjs: "Default event" 
    
         } 
    
    )

};

module.exports = {

    eventTest,
}