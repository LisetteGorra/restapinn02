VERSION 10 NOTES 

ERROR HANDLING 

We are going to add middleware to help us handle errors

because our new Ninja returns a promise we can tack on an error handler

- .catch(function();

and we can pass a custom function that will fire IF there is an error

instead of passing a function we are going to set up some middle wear in the index.js
then we are going to call the middle wear 

we call the middle wear passing a function called next 

- .catch(next); 

and add it as a 3rd parameter to the post router

next says, i'm done and want you to go onto the next piece of middleware