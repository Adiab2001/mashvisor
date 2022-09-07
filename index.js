const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})

app.get('/',(req,res) => {
    res.send('hello world')
})

app.get('/route2',(req,res) => {
    res.send('hello 2')
})

app.listen(port, () =>{
    console.log('example app listening')
})