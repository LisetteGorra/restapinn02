VERSION 6 NOTES

SETTING UP EXPRESS ROUTES

installed 
npm  install nodemon --save -dev

this will automatically restart the code with new changes, instead of having to node index in the console everytime we make a changes

now we make a directory for the routes and create api.js file

we need to require express and create a router app 

- const express = require('express');

- const router = express.Router();

now we can make a get request 
-  //get a list of ninjas from the database
router.get('/ninjas', function(req, res){
    res.send({type:"GET"})
    
});

