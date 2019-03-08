VERSION 11 NOTES 

DELETE REQUESTS
and how to remove data from the database

type inside the DELETE request code block 

- console.log(req.params.id);

we can use find by id and remove a specific id

- Ninja.findByIdAndRemove()

this is a mongoose method 

now we can pass the unique id inside 

- {_id: req.params.id}

and it will look like this 

- Ninja.findByIdAndRemove({_id: req.params.id});

we use .then to fire up a function and have it return to us the ninja that was removed 

.then(function(ninja){
    
});

but we need to send the responce 

res.send(ninja);

- Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    res.send(ninja);
});