const { Schema, model } = require('mongoose');

//schema
const UserSchema = Schema( {

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

module.exports = model( 'User', UserSchema );
 