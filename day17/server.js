const express = require('express');
const pool = require('./db');
const app = express();
const getUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM person');
    
    console.log(result.rows);
  } catch (err) {
    console.error(err.message);
  }
};

getUsers();

// get route 

app.get('/',(req,res)=>{
    res.send("hii")
})


app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000")
})