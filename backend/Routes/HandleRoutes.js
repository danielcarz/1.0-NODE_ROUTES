const express = require('express');

const { check } = require('express-validator');

const router = express.Router();

//Routes
const { showUsers,  createUser, deleteUser } = require('../Controllers/auth.js')


//get user
router.get(

    //route
    '/users', 
    
    //middleware
   /*  check('name').notEmpty().withMessage('El nombre es requerido'), */
   /*  check('name', 'El nombre debe ser obligatorio').not().isEmpty() , */


    //controller
    showUsers

);

router.post(
    
    //route
    '/users', 

    check('name').notEmpty().withMessage('El nombre debe ser requerido'),
    check('email').isEmail().withMessage('El correo debe ser requerido'),
    check('password').isLength( { min: 6 } ).withMessage('la contraseña  debe tener al menos 6 caracteres'),

   
    /*  check('name', 'El nombre debe ser obligatorio').not().isEmpty() , */

    //controller
    createUser
);


module.exports = router;
