VERSION 4 NOTES

Installing Express

Express is just a package, we can do everything without it, but epress package makes things alot easier

we install it with :
- npm install express --save

after install you must make a file and require the express in it with code like so:

- const express = require('express');

We still need to creat an express app
//Set up express app 
const app = express();

We have created the app but it's not doing anything, so we need to make it listen the requests we make 

- app.listen(process.env.port || 4000, function(){
    
});

this port does not work on our c9, we have 3 ports to use 8080, 8081, 8082

then console.log inside the code bloack to see if it's listening 

- console.log('now listening for requests'); 