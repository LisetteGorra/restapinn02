VERSION 14 NOTES 

Handling GET Requests 


-  Ninja.find({})

find is a mongoose method, we add an object inside of it that will retrieve all the ninjas 

 - Ninja.find({}).then(function(ninjas){
        res.send(ninjas)

but we want to use longatude and latitude instead

we are going to use URL parameters

when making a get request we are going to pass parameters as a URL 

- ?Ing=50.45&lat=42.35 

now we have both longitude and latitude added to the URL as parameters

so we will be looking for ninjas within a certain radius, or ninjas nearby 

we are going to use geo near 
