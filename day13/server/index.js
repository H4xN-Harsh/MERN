const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./model');
const connectDB = require('./db');
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//if app.use(cors) is commented 
// app.get('/',async (req,res)=>{
//     res.send("hey i am server ")
// })


// app.post('/user',async(req,res)=>{
//     const{name}= req.body;
//     const newUser = await userModel.create({
//         name:name
//     })
//     res.send(newUser);
// })
app.get('/',async(req,res)=>{
    const response = await userModel.find();
    return res.json({names:response});
})
// add name
app.post('/api/names',async(req,res)=>{
    try{
        const newName = await userModel.create(req.body);
        res.status(201).json(newName);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");

})