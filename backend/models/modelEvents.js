const { Schema, model } = require('mongoose');

//schema
const EventsSchema = Schema( {

    title:{
        type: String,
        required: true
    },

    note: {

        type: String,
        required: true,
       
        
    },

    start: { 
        type: Date,
        required: true
    },

    end: { 
        type: Date,
        required: true,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }

} );

//model

module.exports = model( 'Events', EventsSchema );
 