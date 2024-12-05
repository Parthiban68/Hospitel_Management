const mongoose = require('mongoose');

const connectDb = async () =>{
   try {
     await mongoose.connect(process.env.db_url)
     console.log("MongoDB Connected Successfully");

     mongoose.connection.on('error', (err) =>{
        console.log("Connection Error", err);        
     });
     
   } catch (error) {
     console.error(error);
   }
}

module.exports = connectDb