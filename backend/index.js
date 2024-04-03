const express = require('express');
const cors = require('cors');

const { FRONTED_URL, PORT } = require('./config.js');

const HandleRoutes = require('./Routes/HandleRoutes.js');

const app = express();

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
