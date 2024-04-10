//REQUIREMENTS
const express = require('express');
const { EventsSchema } = require('../../../models/modelEvents');


//model user
const userEvents = require('../../../models/modelEvents');



//show events
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

//create event
const  createEvent  = async ( req, res ) => {

    const { title, note } = req.body;

    //validation 
    console.log( 'req.body is', req.body );

    try {

        let newEvent 

        //intance: save event to database
        newEvent = await new EventsSchema( req.body )

        //save to databese
        newEvent.save();

        
    } catch (error) {

        res.status(500).json({

            ok: false,
            mjs: 'El evento no fue creado',
            error,
        })
        
    }
    
 
    res.status(200).json( { ok: true, mjs: 'event created' } );
}

//found event by id
const foundEventByID = ( req, res ) => {

    res.json( { mjs: 'found by id' } );
}

//delete event by id
const deleteEventByID = ( req, res ) => {

    res.json( { mjs: 'deleteEvents' } );
}

//delete all events
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