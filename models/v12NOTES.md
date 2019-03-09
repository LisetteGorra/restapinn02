V12 NOTES 

PUT REQUESTS 

very similar to delete request 

just a couple of changes 

- Ninja.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(ninja){
    res.send(ninja);
});