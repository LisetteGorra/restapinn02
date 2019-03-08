VERSION 10 NOTES 

ERROR HANDLING 

We are going to add middleware to help us handle errors

because our new Ninja returns a promise we can tack on an error handler

- .catch(function();

and we can pass a custom function that will fire IF there is an error

instead of passing a function we are going to set up some middleware in the index.js
then we are going to call the middleware 

we call the middleware passing a function called next 

- .catch(next); 

and add it as a 3rd parameter to the post router

next says, i'm done and want you to go onto the next piece of middleware

the (next) piece of middleware is going to be for our error handling 

add the next method as a 3rd parameter to each call back function for routers just incase you need it 

--------------------------------------------
now we need to create the middleware

we are going to use 
- app.use()

and pass the middleware inside the parenthesis

so we pass a function, middleware functions take up to 4 parameters
- (function(err,req,res,next)) 

--------------------------------------------
now we can console.log the error to test the middleware

- console.log(err);
-ERROR!!
--------------------------------------------
now we can send the error message back to the "client"

comment out the console.log

- res.send({error:err.message});

we are sending back an object with a property of error and the message

now we get a responce and at least now we get an error and the front end will know something is wrong 

now we have to change our status from 200 which means ok, to a 400 status code

- .status(422).send

attach this to the send error message

