const express = require('express');
const router = express.Router();

// Importar rutas de autenticación y eventos
const authentication = require('./1.0-Users');
const events = require('./2.0-Events');

// Definir rutas
router.use('/auth', authentication);
router.use('/events', events);

module.exports = router;
