const express = require('express');

const taskModel = require('../model/task.model')


const router = express.Router();
// get all tasks 
router.get('/',async(req,res)=>{
    try{
        const allTask = await taskModel.find();
        return res.status(200).json(allTask);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

// get task by id 
router.get('/:id',async(req,res)=>{
    try{
        const task = await taskModel.findById(req.params.id);
        return res.status(200).json(task);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

//add task

router.post('/',async(req,res)=>{
    try{
        const newNote = await taskModel.create(req.body);
        res.status(201).json(newNote);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

module.exports= router;