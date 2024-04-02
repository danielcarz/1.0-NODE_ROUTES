const express = require('express');
const cors = require('cors');

const { FRONTED_URL, PORT } = require('./config.js');

const HandleRoutes = require('./Routes/HandleRoutes.js');

const app = express();

app.use(cors({ origin: FRONTED_URL }));

// Utiliza el manejador de rutas
app.use('/', HandleRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
