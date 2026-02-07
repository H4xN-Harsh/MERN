const {Pool} = require('pg');



const express = require('express');
const app = express();
app.use(express.json());
const pool = new Pool({
    user:'postgres',host:'localhost',database:'p1',password:'harsh',port:5432
});

app.get('/',(req,res)=>{
    res.send("hey their  i am here ")
})

app.post('/register',async(req,res)=>{
    try{
        const {name,password,role} = req.body;
    if(!name||!password){
        return res.status(400).json({
            message:"name and password required "
        })
    }
    const userRole = role ==='manager'?'manager':'user';
    const query= 'insert into users (name,password ,role) returning id, name, role';
    const result = await pool.query(query,[name,password,role]);
    res.status(201).json({
        message:"user resgisterd ",user:result.rows[0]
    })
    }catch(err){
        console.error(err.message);
        res.status(500)
    }
    


})


app.listen(3000,()=>{
    console.log("http://localhost:3000");
})