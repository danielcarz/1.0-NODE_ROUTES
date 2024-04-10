//REQUIREMENTS 
const express = require('express');

const router = express.Router(); // router of express

//MIDDLEWARES
const { validateJWT } = require('../../../middlewares/2.0-validateJWT.js');

//controllers
const { eventTest } = require('../Events_Controllers/Events_Controllers.js');
const { revalidateToken } = require('../../Auth/Auth_Controllers/AuthControllers.js'); //must be modified
//const { route } = require('./1.0-Users.js');

 

router.get('/renew', validateJWT, revalidateToken );

router.get('/', validateJWT, eventTest );





module.exports = router; 