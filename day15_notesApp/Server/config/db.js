
const mongoose = require('mongoose');
const connetDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongo db is connected ");
    }catch(error){
        console.error("Not connected to db : ",error.message);
        process.exit(1)
    }
}

module.exports = connetDB;