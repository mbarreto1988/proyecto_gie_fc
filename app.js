const express = require('express');
const app = express();
const path = require ('path')
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor funcionando en puerto ' + process.env.PORT);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});