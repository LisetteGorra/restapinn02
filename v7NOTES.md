VERSION 7 NOTES 

our API routes

GET http://www.ninjago.com/api/ninjas
Read/retrieve a list of characters

POST http://www.ninjago.com/api/ninjas
Create a new ninja

PUT http://www.ninjago.com/api/ninjas/id
Update an existing ninja

DELETE http://www.ninjago.com/api/ninjas/id
Delete a ninja 

------------------------------------------------
Example using jQuery 

$ajax({
method: "POST",
url: "http://www.ninjago.com/api/ninjas",
data:{name: "Ganash", rank:"Red Belt"}
)}

$ajax({
method: "GET",
url: "http://www.ninjago.com/api/ninjas",
data:{name: "Ganash", rank:"Red Belt"}
)}
------------------------------------------------
we have to install a body parser to use this with Postman

npm install body parser --save

------------------------------------------------
then require the body parser on your index.js file 
require it under the express require
ORDER IS IMPORTANT 
- const bodyParser = require(body-parser);

 
------------------------------------------------
then we make an app to use it after we have required it, above the app for routes and just afyer the app for express

- app.use(bodyParser.json());

 
------------------------------------------------
now we go into our routes and request the body parser so it can access whatever is sent to us
- console.log(req.body);

now when we make a request, it's going to send it to the request body in the console

we should be able to get and send info to postman 

we can do this by putting info into the router.post object 
- type:'POST',
- name: req.body.name,
- rank: req.body.rank


it should look like this 

- router.post('/ninjas', function(req, res){
    console.log(req.body);
    res.send({
        type:"POST",
        name: req.body.name,
        rank: req.body.rank
    });

now we have succesfully accesed the body of this post handler through thte body 