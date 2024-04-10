//REQUIREMENTS 
const express = require('express');

const router = express.Router(); // router of express


//MIDDLEWARES
const { check } = require('express-validator'); //check method

const { validationField } = require('../../../middlewares/1.0-ValidationField.js'); // custom middleware

const { validateJWT } = require('../../../middlewares/2.0-validateJWT.js');

//controllers (login)
const { showUsers,  createUser, loginUser, deleteUser, revalidateToken } = require('../Auth_Controllers/AuthControllers.js');



//HTTP METHODS

//get users
router.get(

    //route
    '/users', 
    
   //controller
    showUsers

);

//create user
router.post(
    
    //route
    '/users', 

    //validation fields middleware
    check('name').notEmpty().withMessage('El nombre debe ser requerido'),
    check('email').isEmail().withMessage('El correo debe ser requerido'),
    check('password').notEmpty().withMessage('falta crear la contraseña'),
    check('password').isLength( { min: 6 } ).withMessage('la contraseña  debe tener al menos 6 caracteres'),

    //validator Error
    validationField,

    //controller
    createUser
);


//login user
router.post(

    //route
    '/login',

    //validation fields
    check( 'email' ).notEmpty().withMessage('debe ingresar el correo'),
    check('password').notEmpty().withMessage('Falta escribir la contraseña'),

    //validator Error
    validationField,

    //controller
    loginUser
)

//revalitade token
router.get('/renew', validateJWT ,revalidateToken ); 


module.exports = router;
 