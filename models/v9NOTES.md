VERSION 9 NOTES 

Saving Data to MongoDB

require mongoose in your index.js file under the other requirements
- const mongoose = require('mongoose');

then create a connection string under the express app
- mongoose.connect('mongodb://localhost/ninjago');

so far ninjago doesn't exist yet, but it doesn't matter because mongo will see that it dowsn't exist and will create it for use

now we care connected to mongodb 

now we need to set mongoose promise to the global promise

- mongoose.Promise = global.Promise 

now we have overrided the mongoose.Promise because it is depricated. 

now we have connected to mongoDB, 

now when our application runs, it's going to run this code connect to mongoDB, and now when we accept a POST request, we can take that DATA and interact succefully with mongoDB to store it in the database - so we have to go to the POST request in api.js and add a new ninja based on the ninja model we made earlier in ninja.js

so it will have the same ninja schema model 

remove the console.log statement 

and create a new variable ad make it equal to a new ninja 

- var ninja = new Ninja();

but in order for this to work, we have to require the ninja model in the api.js file
we can just import it at the top 

- const Ninja = require('../models/ninja.js');

we must go up a directory into models to access the file ninja.js ../ = going up a directory 

so now we have created a new instance of New Ninja model, but it is not yet in mongoDB, it's still local, So we need to give the new ninja some data 

so we just add the requst body into 1st parameter

- var ninja = new Ninja(req.body);

and we can save it to the database in the ninja collection by:
- ninja.save();

---------------------------------------------
we can shorten this up by using a mongoose method ninja.create .... instead of creating new instance and saving seperatly ... 

- Ninja.create(req.body);

this will access the Ninja model and create it, and require body in parameter

this will replace the new instance and save method 

this .create will automatically save
---------------------------------------------
--------------------------------------------
we want to make sure the create method fires up and completes its execution, and happens correctly before we send our responce and add more code 

we need to wait for the create method to complete, and because it returns to us a promise, we can use the .then method 

.then will take a function as a parameter and that will give us the data it has saved to the database

- Ninja.create(req.body).then(function(ninja){
   res.send(ninja); 
});

we can send our response in this function, so we delete the response already there and send back the ninja that we already saved to the database 

