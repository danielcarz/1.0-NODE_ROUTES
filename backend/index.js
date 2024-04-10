//REQUIREMENTS
const express = require('express');

const cors = require('cors'); //cors

require('dotenv').config(); // config enviorment variables file
//const { FRONTED_URL, PORT } = require('./config.js'); // enviorment variables

const PORT = process.env.PORT;
const FRONTED_URL = process.env.FRONTED_URL;


//ROUTES
//const HandleRoutes = require('./Routes/HandleRoutes.js'); //authentication
//const EventsRoutes = require('./Routes/Events.js'); //events
const HandleRoutes = require('./Routes/RoutesHandler.js');
 
const { db_conection } = require( './Database/DatabaseConfig.js' ); // database 



const app = express();

//db conection
db_conection();

//cors
app.use(cors({ origin: FRONTED_URL })); 

//parse
app.use(express.json());

// routes handler
app.use('/', HandleRoutes );
//app.use('/events', EventsRoutes );



//listener
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
