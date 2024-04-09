//REQUIREMENTS
const jwt = require('jsonwebtoken'); //jwt
 

const generateJWT = ( uui, name ) => {

    return new Promise ( ( resolve, reject ) => {
        
        //JWT payload
        const payload = { uui, name };

        // sign JWT
        jwt.sign(   
                    
                    //payload
                    payload,

                    //secret Key
                    process.env.SECRET_JWT_KEY, 

                    //time of expiration
                    { expiresIn: '2h' },

                    //jwt sign callback response
                    ( err, token ) => {

                        if( err ){

                            console.log( err );

                            reject('No se puedo generar el token')
                        };

                        resolve( token );

                    }
        );

    } ); 
 
}

module.exports = { 

    generateJWT,
}