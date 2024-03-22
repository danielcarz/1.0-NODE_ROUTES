import express from 'express';

const app = express();

//
app.get( '/user', (req, res) => {

    res.send( 'users' )
} );


app.listen( 3006, () => { console.log( 'app run on port 3006' ) } )