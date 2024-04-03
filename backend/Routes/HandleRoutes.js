const express = require('express');

//midlewares
const { validationField } = require('../middlewares/1.0-ValidationField.js');

const { check } = require('express-validator');

const router = express.Router();

//Routes
const { showUsers,  createUser, loginUser, deleteUser } = require('../Controllers/auth.js')

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

    //validation fields
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
    check( 'name' ).notEmpty().withMessage('Se debe ingersar el usuario'),
    check('password').notEmpty().withMessage('Falta escribir la contraseña'),

    //validator Error
    validationField,

    //controller
    loginUser
)


module.exports = router;
