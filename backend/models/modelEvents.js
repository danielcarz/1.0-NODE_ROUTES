const { Schema, model } = require('mongoose');

//schema
const EventsSchema = Schema( {

    name:{
        type: String,
        required: true
    },

    email: {

        type: String,
        required: true,
       
        
    },

    password: { 
        type: String,
        required: true
    }

} );

//model

module.exports = model( 'Events', EventsSchema );
 