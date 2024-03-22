import express from 'express';
import cors from 'cors';

const app = express();


app.use( cors( { origin: 'http://localhost:5173' } ) );

//
app.get( '/user', (req, res) => {

    res.send( {
        users: []   
    } );
} );


app.listen( 3007, () => { console.log( 'app run on port 3007' ) } )