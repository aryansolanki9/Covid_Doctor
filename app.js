const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const db = require('./config/db').database;

//DB connection
mongoose.connect(db,{useNewUrlParser: true})
    .then (() =>{
       console.log('Database connected successfully')

    })
    .catch((err) =>{
        console.log('Unable to connect to DB',err)
    });

 const port = process.env.PORT || 5000;
 
 //Intialize cors middleware
 app.use(cors());

 //Intialize cors middleware
 app.use(bodyparser.json());

 //Initialized public directory
 /*app.get('*',(req,res) =>{
     res.sendFile(path.join(__dirname, 'public/index.html'))

 });*/
 
app.get('/', (req, res) =>{
    res.send('<H1>Hello World </h1>')

});

const postRoutes = require('./routes/apis/doctor'); 

app.use('/covidfighter/v1.0/doctor',postRoutes);
/*
app.listen(port, ()=>{
    console.log('Server started on Port ',port)
})*/