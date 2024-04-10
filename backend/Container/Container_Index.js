//Containers Routes

//Auth
const autenticaciónRoutes = require('./Auth/Auth_Routes/Auth_RoutesHandler');

//EVENTS
const eventsRoutes = require('./Events/Events_Routes/Events_RoutesHandler');



module.exports = {

    //authentication
    autenticaciónRoutes,

    //events
    eventsRoutes

}