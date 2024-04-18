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

    /* start: { 
        type: Date,
        required: true
    },

    end: { 
        type: Date,
        required: true, 
    }, */
 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }

} );

//
EventsSchema.method( 'toJson', function () {

    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;  
 
} ) 

//model

module.exports = model( 'Events', EventsSchema );
 