const express = require('express');
const router = express.Router();

//Containers Routes
const { autenticaciónRoutes, eventsRoutes } = require('../Container/Container_Index');
//const events = require('./2.0-Events');

// Definir rutas
router.use('/auth', autenticaciónRoutes);
router.use('/events', eventsRoutes);

module.exports = router;
 