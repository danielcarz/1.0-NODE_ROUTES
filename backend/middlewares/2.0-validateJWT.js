//REQUIREMENTS
const jwt = require('jsonwebtoken'); //jwt

const validateJWT = (req, res, next) => {

    //get the x-token from header
    const token = req.header('x-token');

    

    //validate if a token has been introduced  
    if( !token ){

        res.status(401).json( { ok: false, mjs: "falta ingresar el token" } ); 
    } 
 
    try { 

        const payload = jwt.verify( token, process.env.SECRET_JWT_KEY );

        console.log( payload );

        req.uid = payload.uui; 
        req.name = payload.name;

    } catch (error) {
        
        res.status(401).json( { ok: false, mjs: 'token no valido' } );
    }

    next();

}


module.exports = { 
    
    validateJWT
}