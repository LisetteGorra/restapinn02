VERSION 13 NOTES 

GeoJson 

GET REQUEST 

we are going to use geo location

we don't want to 'GET' all the ninjas, just nearby ninjas

we need to create a geoloaction feature in the api 

Geo Json handles the location for us 

we use a geometry property, using Points as coordinates 

------------------------------------------------------
what we need to do 1st is create a new Schema for our geolocation


- const GeoSchema = new Schema({
   type:{ 
       type: String,
       default: "Point"},
   coordinates:{
      
   }
});


we are using curly braces because we are passing through more than one bit of data

the first time type is listed is refering to the Schema type, the second time, it refers to the type of data 

 - coordinates:{
       type: [Number],
       index: "2dsphere"
      
   }

the type [Number], says we want an array of numbers 
and the index of 2dsphere if the type of map we want 
it takes into consideration the circumference of the planet 


the code above is breaking down the schema 

- "geometry":{
    "type": "Point",
    "coordinates": [125.6, 10.1]
} 

we have to pass the geometry of the ninja when we create a ninja .... at the end of our NinjaSchema

- geometry: GeoSchema

geometry is equal to the    GeoSchema

the ninja Schema is now updated to look like the GeoSchema by adding the property to the end of the NinjaSchema object 

now when we create a new ninja, it's going to pass a property of type, and default to point, if we don't pass anything in

and also coordinates of our ninja