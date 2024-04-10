//REQUIREMENTS 
const express = require('express');

const router = express.Router(); // router of express

//MIDDLEWARES
const { validateJWT } = require('../../../middlewares/2.0-validateJWT.js');

//controllers
const { eventTest } = require('../Events_Controllers/Events_Controllers.js');
const { revalidateToken } = require('../../Auth/Auth_Controllers/AuthControllers.js'); //must be modified

 
 

router.get('/renew', validateJWT, revalidateToken );

// get events
router.get('/', validateJWT, showEvents );

//create events
router.post('/', validateJWT, createEvent );

//found by id
router.get('/:id', validateJWT, foundEventByID);

//delete event by id
router.delete('/:id', validateJWT, deleteEventByID);

//delete all events
router.delete('/', validateJWT, delete_ALL_Events);







module.exports = router; 