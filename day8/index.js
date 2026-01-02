// // const catMe = require('cat-me');
// // console.log(catMe());


// const http = require('http');

// const server = http.createServer((req,res)=>{
//     // console.log(req.url)
//     if(req.url=='/about')res.end('this is the about page')
    
//     else if(req.url=='/profile')res.end('this is the profile page')
//     res.end("hello sir kya hall hai yeeeeee 🤣🤣🤣😂😂");
// }).listen(3000,()=>{
//     console.log('localhost:3000')
// })

const express = require('express');
const app = express();

app.set('view engine','ejs');



app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/profile',(req,res)=>{
    res.send('this is the profile page ');
});
app.listen(3000,()=>{
    console.log('http//localhost:3000');
})
