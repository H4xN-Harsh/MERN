const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:true,
        trim:true,
    },
    content:{
        type:String,
        required:true,
    }
})

const taskModel = mongoose.model('model',TaskSchema);
module.exports = taskModel;