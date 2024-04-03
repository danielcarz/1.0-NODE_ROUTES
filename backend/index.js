const express = require('express');
const cors = require('cors');
require('dotenv').config();


const { FRONTED_URL, PORT } = require('./config.js');

const HandleRoutes = require('./Routes/HandleRoutes.js'); //routes
const { db_conection } = require( './Database/config.js' ); // database

const app = express();

//db conection
db_conection();

//cors
app.use(cors({ origin: FRONTED_URL })); 

//parse
app.use(express.json());

// routes handler
app.use('/', HandleRoutes);



//listener
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
