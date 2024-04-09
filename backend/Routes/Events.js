//REQUIREMENTS 
const express = require('express');

const router = express.Router(); // router of express


//controller
const { eventTest } = require('../Controllers/events');

router.get('/', eventTest );

module.exports = router; 