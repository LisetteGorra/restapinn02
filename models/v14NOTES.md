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

-    Ninja.geoNear(
       {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat.que.lat)]}
       );

we are using ninja as a Point, and the long and lat coordinates will be returned as a string, to get them returned as a number we added a paramter of parseFloat to both long and lat 

-    {maxDistance: 1000000, spherical: true}
        ).then(function(ninjas) {
        res.send(ninjas);
        res.send({ type: "GET" });

this code will give us our max distance and the distance with be measured in a spherical way via lat and long 