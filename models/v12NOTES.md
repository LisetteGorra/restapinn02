V12 NOTES 

PUT REQUESTS 

very similar to delete request 

just a couple of changes 

- Ninja.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(ninja){
    res.send(ninja);
});

once the update has been completed we are going to refind the updated ninja and send that back, because the code above will return the old ninja, not the updated one

to do this we are going to use findOne

- Ninja.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
    Ninja.findOne({_id:req.params.id}).then(function(ninja){
      res.send(ninja);   
    });
  });
});