//REQUIREMENTS
const express = require('express');

const cors = require('cors'); //cors

require('dotenv').config(); // config enviorment variables file

const HandleRoutes = require('./Routes/RoutesHandler.js'); // route handler

const { db_conection } = require( './Database/DatabaseConfig.js' ); // database 


const PORT = process.env.PORT; //enviorment variables
const FRONTED_URL = process.env.FRONTED_URL; //enviorment variables

 
//START APLICATION
const app = express();


//MIDDLEWARES
app.use(cors({ origin: FRONTED_URL })); //cors

app.use(express.json()); //parse

app.use('/', HandleRoutes ); //route handler


//DB CONECTION
db_conection();





//listener
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
