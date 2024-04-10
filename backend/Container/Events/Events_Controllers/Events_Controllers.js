//REQUIREMENTS
const express = require('express');

//EVENTS
const showEvents = ( req, res ) => {

    const { uid, name } = req;
    
    
    

    res.json( 
        {
            
            ok: true, 
            nameUser: name,
            mjs: "Default event" 
    
         } 
    
    )


};

const  createEvent  = ( req, res ) => {

    //validation 
    console.log( 'req.body is', req.body );
    

    res.json( { mjs: 'createEvents' } );
}

const foundEventByID = ( req, res ) => {

    res.json( { mjs: 'found by id' } );
}

const deleteEventByID = ( req, res ) => {

    res.json( { mjs: 'deleteEvents' } );
}

const delete_ALL_Events = ( req, res ) => {

    res.json( { mjs: 'Dellete all Events' } );
}




module.exports = {


    showEvents,

    createEvent,

    foundEventByID,

    deleteEventByID,

    delete_ALL_Events,
}