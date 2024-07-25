const express = require('express');
const mysql = require('mysql')
const app = express()
const PORT = 3001;

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"waren2node",
    database:"library"
})
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

    const q = "INSERT INTO books (`title`,`description`,`cover`) VALUES  (?)"
    const values = [
       "title from bakend",
       "description from bakend",
       "description.png"
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        else 
            return res.json(data)
    })
})

app.listen(PORT,()=>{
    console.log(`your app is up and \n running on port : ${PORT}`)
})