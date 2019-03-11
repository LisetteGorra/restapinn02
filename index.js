const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Set up express app 
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise

app.use(express.static('public'));

//Set up body parser app 
app.use(bodyParser.json());

app.use('/api',routes('./routes/api'));

//error handling middleware 
app.use(function(err,req,res,next){
    // console.log(err);
    res.status(422).send({error:err.message});
});

// app.get('/api', function(req, res){
//     console.log('GET request');
//     res.end({name: "Lisette"});
// });

//listen for requests 
//   app.listen(process.env.port || 4000, function(){
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('now listening for requests');
});