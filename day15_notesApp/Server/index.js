require('dotenv').config()
// console.log("ENV CHECK:", process.env.MONGO_URI);

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const taskRouter = require('./routes/task.route');
const app = express();
app.use(cors())
app.use(express.json());
connectDB();
app.get('/',async(req,res)=>{
    res.send("hey i am running ")
});
app.use('/notes',taskRouter);

app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
})