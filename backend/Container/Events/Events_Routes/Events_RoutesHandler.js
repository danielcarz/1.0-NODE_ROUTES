//REQUIREMENTS 
const express = require('express');

const router = express.Router(); // router of express

//MIDDLEWARES
const { validateJWT } = require('../../../middlewares/2.0-validateJWT.js');

//controllers
const { showEvents, createEvent, foundEventByID, deleteEventByID, delete_ALL_Events } = require('../Events_Controllers/Events_Controllers.js');
const { revalidateToken } = require('../../Auth/Auth_Controllers/AuthControllers.js'); //must be modified

 
//middleware for aply in all methods
router.use(revalidateToken)

router.get('/renew', revalidateToken ); 

// get events
router.get('/', showEvents );

//create events
router.post('/', createEvent );

//found by id
router.get('/:id', foundEventByID);

//delete event by id
router.delete('/:id', deleteEventByID);

//delete all events
router.delete('/', delete_ALL_Events);







module.exports = router; 