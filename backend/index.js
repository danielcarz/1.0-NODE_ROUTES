import express from 'express';
import cors from 'cors';

import { FRONTED_URL, PORT } from './config.js';

const app = express();


app.use( cors( { origin: FRONTED_URL } ) ); 


app.get( '/user', (req, res) => { 

    res.send( { message: 'hello server' } );
} );


app.listen( PORT, () => { console.log( 'app run on port 3007' ) } )