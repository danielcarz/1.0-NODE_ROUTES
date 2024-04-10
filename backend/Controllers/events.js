//REQUIREMENTS
const express = require('express');


const eventTest = ( req, res ) => {

    const { uid, name } = req;
    

    res.json( 
        {
            
            ok: true, 
            name: name,
            uid: uid,
            mjs: "from events" 
    
         } 
    
    )

};

module.exports = {

    eventTest,
}