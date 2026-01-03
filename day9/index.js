const express = require('express');
const morgan = require('morgan');
const userModel = require('./models/user');
const dbConnection = require('./config/db');
const app = express();

app.use(morgan('dev'))//third party middlewares 

//built-in middlewares 
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))


app.set('view engine','ejs');

// app.use((req,res,next)=>{
//     console.log("this is middleware created by Harsh ");

//     return next();
// })

app.get('/',(req,res,next)=>{
    console.log("this is middleware created by Harsh ");

    return next();
},(req,res)=>{
    res.render('index')
})
app.get('/profile',(req,res)=>{
    res.send("this is the profile  ")
})
app.get('/register',(req,res)=>{
    res.render('register')
})
app.post('/register', async(req,res)=>{
    // console.log(req.body);
    const {username,email,password} = req.body;
    const newUser = await userModel.create({
        username:username,
        email:email,
        password:password
    })
    res.send(newUser)
});

// app.get('/get-users',(req,res)=>{
//     userModel.find().then((users)=>{
//         res.send(users);
//     })
// })
// only for one 

//update
app.get('/update-user',async(req,res)=>{
    await userModel.findOneAndUpdate(
        {
            username:"harsh"
        },{
            email:"rosie@gmail.com"
        }
    )
    res.send("user updated")
})
//delete
app.get('/delete-users',async (req,res)=>{
    await userModel.findOneAndDelete({
        username:"harsh"
    })
    res.send("user Deleted ")
})
app.get('/get-users',(req,res)=>{
    userModel.findOne({
        username:"harshu"
    }).then((users)=>{
        res.send(users);
    })
})

// form data
// app.get('/get-form-data',(req,res)=>{
//     console.log(req.query);
//     res.send('data recived ');
// })

app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    res.send('data recived ');
})


app.listen(3000,()=>{
    console.log('http//localhost:3000')
})
