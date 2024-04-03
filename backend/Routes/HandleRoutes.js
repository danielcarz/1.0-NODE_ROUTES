const express = require('express');

const { check } = require('express-validator');

const router = express.Router();

//Routes
const { showUsers,  createUser, loginUser, deleteUser } = require('../Controllers/auth.js')


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

    check('name').notEmpty().withMessage('El nombre debe ser requerido'),
    check('email').isEmail().withMessage('El correo debe ser requerido'),
    check('password').isLength( { min: 6 } ).withMessage('la contraseña  debe tener al menos 6 caracteres'),


    //controller
    createUser
);

//login user
router.post(

    //route
    '/login',

    //middleware
    check( 'name' ).notEmpty().withMessage('Se debe ingersar el usuario'),
    check('password').notEmpty().withMessage('Falta escribir la contraseña'),

    //controller
    loginUser
)


module.exports = router;
