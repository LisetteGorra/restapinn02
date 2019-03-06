VERSION 8 NOTES 

MODELS AND SCHEMAS

WHAT ARE MODELS?

- Models represent collections in MongoDB 
- User Model to represent a collection of Users 
- Ninja Model to repreent a collection of Ninjas

What are Schemas?

- Schemas define the structure of our data objects 

{
    name: "String",
    rank: "String",
    availability: Boolean
}

--------------------------------------------------
 MONGOOSE 
 
 - Helps us interact with the database
 - Adds a layer of methods to easily save, edit, retreive, and delete data from mongodb
 - Allows us to create our models and Schemas easily 
 - Makes it easier for us to create our models and schemas 
 

INSTALL MONGOOSE 

- npm install mongoose --save 

---------------------------------------------
now we are going to create a folder for models
and a ninja.js file and require mongoose in it

- const mongoose = require('mongoose');

the next thing we want is a variable to store our Schema class in 

- const Schema = mongoose.Schema;

next create ninja Schema and model
- const NinjaSchema = new Schema({
inside this code block we will define how we want our object to lok by assigning properties and values
    
});