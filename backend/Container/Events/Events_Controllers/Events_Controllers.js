//REQUIREMENTS
const express = require('express');
const  EventsSchema  = require('../../../models/modelEvents');


//model user
const userEvents = require('../../../models/modelEvents');



//show events
const showEvents = async ( req, res ) => {
    
    const { uid, name } = req;
    const userId = req.uid; 
    
    const events = await EventsSchema.find( { user: userId } );  

    res.json(  
        { 
            
            ok: true, 
            nameUser: name,
            events
    
         }   
    
    )


};

//create event
const  createEvent  = async ( req, res ) => {

    const { title, note } = req.body;


    //validation 
    console.log( 'req.body is', req.body ); 
    
    const  newEvent = await new EventsSchema( req.body ); 
 
    try {

        newEvent.user = req.uid; 

        const eventSaved = await newEvent.save();

        res.json( { 

            ok: true, 
            eventSaved 

        } )

        
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
const foundEventByID = async ( req, res ) => {

    const eventID =  req.params.id;

    const uid = req.uid;

    try {
        
        const event = await EventsSchema.findById( eventID );
        
        if( !eventID ){
            res.status(400).json({

                ok: false,
                mjs: "No existe evento con el id ingresado"

            });
        };

        res.json({
            ok:true,
            mjs: event
        })

    } catch (error) {
        
        res.status(500).json( {

            ok: false,
            mjs: "por favor hable con el administrador"

        })
    }
}

const updateEventByID = async ( req, res ) => {

    //GET DATA
    const idEvent =  req.params.id; //request parameters from client
    const idUser = req.uid; // id of the authenticated user

 

    try {
        
        //SEARCH OF THE EXISTING EVENT
        const event = await EventsSchema.findById( idEvent );  
         
        const idUserEvent =  event.user.toString();
        const idfromEvent =  event._id.toString();  
           
        console.log( 'user events is: ', event.user.toString() );
        console.log( 'uid: ', idUserEvent );
        console.log( 'uid: ', idfromEvent );
         
        
        //VALIDATION FOR EXISTING EVENT
        if( !idfromEvent ){  
            res.status(400).json({

                ok: false,
                mjs: "No existe evento con el id ingresado"

            });
        }

        //VALIDATION OF USER PERMISSIONS
        if( idUserEvent !==  idUser ){

            res.status(401).json( { 
                ok: false,
                mjs: "No tiene privilegios de editar este evento"

            })
        };

        
        //CREATION OF UPDATED EVENT
        const newEvent = {

            ...req.body,
            user: idUser,

        };
        console.log( 'continue2' )

        //UPDATE EVENT INTO THE DATABASE
        const eventUpdated = await EventsSchema.findByIdAndUpdate( idEvent, newEvent, { new: true } );

        //ANSWER SUSCCES
        res.json({
            ok:true,
            mjs: "evento actulizado",
            eventUpdated
        }) 

    } catch (error) {
        
        res.status(500).json( {

            ok: false,
            mjs: "por favor hable con el administrador"

        })
    }
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

    updateEventByID,

    deleteEventByID,

    delete_ALL_Events,
}