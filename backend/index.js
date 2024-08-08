const express = require('express');
require('dotenv').config()
const mysql = require('mysql')
const app = express()
const PORT = process.env.PORT;

const db = mysql.createConnection({
    host: process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})
app.use(express.json())
app.get('/home',(req,res)=>{
    res.json("hello world");
})
app.get('/books',(req,res)=>{
     const q = "SELECT *  FROM books ";

     db.query(q,(err,data)=>{
        if(err) return res.json(err)
        else
            return res.json(data)
     })
})

app.post('/book',(res,req)=>{
    
    const body = res.body
    console.log(body)
    const q = "INSERT INTO books (`title`,`description`,`cover`) VALUES  (?)"
    const values = ({
       title : body.title,
       description :body.description,
       cover: body.cover
     });

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        else 
            console.log(data)
            return res.json(data)
    })
})

app.listen(PORT,()=>{
    console.log(`your app is up and \n running on port : ${PORT}`)
})