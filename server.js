const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var morgan = require('morgan');

const app=express();


app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(morgan('tiny'));
app.use('/api',require('./server/api.js'));


const server =app.listen(8444,()=>{
const port = server.address().port;
console.log("Server is running at localhost:",port);
})