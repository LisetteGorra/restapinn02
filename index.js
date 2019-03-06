const express = require('express');
const routes = require('./routes/api');
const bodyParser = require(body-parser);
//Set up express app 
const app = express();

//Set up body parser app 
app.use(bodyParser.json());

app.use('/api',routes('./routes/api'));

app.get('/api', function(req, res){
    console.log('GET request');
    res.end({name: "Lisette"});
});

//listen for requests 
//   app.listen(process.env.port || 4000, function(){
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('now listening for requests');
});