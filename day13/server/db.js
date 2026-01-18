const mongoose = require('mongoose');
const connectDB = async()=>{
try{
    await mongoose.connect('mongodb://0.0.0.0/project1');
    console.log("DataBase is connected")
}catch(error){
    console.error(error,"not connect to db ");
    process.exit(1);
}
}
module.exports = connectDB;