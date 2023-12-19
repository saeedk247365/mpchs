const express = require('express');
const dotenv = require('dotenv');
const app = express();

var path        = require('path');
const $ =require('jquery');
const mongoose = require('mongoose');
var session = require('express-session');


const bodyParser = require('body-parser');


// Ubaid is a genius
app.use(session({
    secret: 'MULTIMENSIONHOUSINGS',
    resave: false,
    saveUninitialized: false,
   
  }))
app.set('view engine', 'ejs');
app.use('/jquery',express.static(path.join(__dirname+'/node_modules/jquery/dist/')));
app.use(express.static(__dirname + '/public'));
dotenv.config({path: './config.env'});


require('./db/conn');

app.use(
    express.urlencoded({ extended: true })
);
 app.use(bodyParser.urlencoded({ extended: true }));

 app.use(express.json());
 app.use(bodyParser.json());
const PORT = process.env.PORT;

//mention the router file
app.use(require('./router/auth'));


//create Server
console.log(process.env.deployment)
depl = process.env.deployment
if(!depl){
    console.log('Running Debug Version')
    app.listen(PORT,() => {
        console.log('server is running on',PORT);
    });
} else {
    console.log("Running Release Version")
}


module.exports = app;