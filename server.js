// import express
const express = require('express');
const app = express();

// let dev use ejs
app.set('view-engine', 'ejs')

// set up root route
app.get('/', (req,res)=>{
    //render index.ejs when user hit root
    res.render('index.ejs', { name : 'Andy' })
})

// listen at port 3000
app.listen(3000)