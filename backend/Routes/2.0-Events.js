//REQUIREMENTS 
const express = require('express');

const router = express.Router(); // router of express

//MIDDLEWARES
const { validateJWT } = require('../middlewares/2.0-validateJWT.js');

//controller
const { eventTest } = require('../Controllers/events.js');
const { revalidateToken } = require('../Controllers/auth.js');
const { route } = require('./1.0-Users.js');



router.get('/renew', validateJWT, revalidateToken );

router.get('/', validateJWT, eventTest );





module.exports = router; 