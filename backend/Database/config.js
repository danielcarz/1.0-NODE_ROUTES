const { mongoose } = require('mongoose');

const db_conection = async () => { 
   

    try {

 
        const uril = process.env.DB_CONECTION;
  
            await mongoose.connect(uril);

            console.log( 'db conected' )
        
    } catch (error) {
        console.error('error to conect db', error)
    }


}

module.exports = {
    db_conection
}