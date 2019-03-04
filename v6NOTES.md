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

----------------------------------------------
we have succesfully created 4 methods that are atatched to the router const we made earlier 
----------------------------------------------

now we want to use the routes in the index file

the way we are going to export these routes is 
- module.exports = router;
 

----------------------------------------------
once we've exported we can import it into another file

we go back to the index and add it to the top

- const routes = require('./routes/api');

now we can tell it use the routes 

- app.use(routes);

we can add the api to the app.use, as the 1st parameter instead of adding it to each method individually
- app.use('/api',routes);

we can also add a 3rd paramet and get rid of the routes const 

- app.use('/api',routes('./routes/api'));

