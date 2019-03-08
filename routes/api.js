const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja.js');


//get a list of ninjas from the database
router.get('/ninjas', function(req, res){
    res.send({type:"GET"});
    
});

//add a new ninjas to the data base
router.post('/ninjas', function(req, res, next){
   Ninja.create(req.body).then(function(ninja){
   res.send(ninja);
       
    }).catch(next);
    
});

//update a ninja in the data base
router.put('/ninjas/:id', function(req, res){
    res.send({type:"PUT"});
    
});

//delete a ninja from the database
router.delete('/ninjas/:id', function(req, res){
    res.send({type:"DELETE"});
    
});

module.exports = router;

