//REQUIREMENTS
const { mongoose } = require('mongoose'); //mongoose



const db_conection = async () => { 
   

    try {
 
        const dbConenctionUri = process.env.DB_CONECTION;
  
        await mongoose.connect( dbConenctionUri );

        console.log( 'db conected' )
        
    } catch (error) {

        console.error('error to conect db', error);

    }


}

module.exports = {

    db_conection,

}