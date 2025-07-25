 const express = require('express');
 const router = express.Router();
 const Person = require('../models/Person');

 router.post('/', async (req,res) => {
   try{
     const data = req.body // Assuming the request body contains the person data
 
     //Create a new Person document using the Mongoose Model
     const newPerson = new Person(data);
 
   //save the new person to the data 
   const response = await newPerson.save();
   console.log('data saved');
   res.status(200).json(response);
   }
   catch(err){
     console.log(err);
     res.status(500).json({error: 'Internal Server Error'});
   }
 })

 
//get method item for person
router.get('/', async (req,res) => {
  try{
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
})


  router.get('/:workType', async(req,res) => {
  try{
    const workType = req.params.workType;  //Extract the workType from the url parameter
  if(['chef','manager','waiter'].includes(workType)){ //if(workType == 'chef' || workType == 'chef' || workType == 'chef')
    
    const response = await Person.find({work: workType});
    console.log('response fetched');
    res.status(200).json(response);

  }else{
    res.status(404).json({error:'Invalid workType'});
  }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
});

//update 
router.put("/:id", async(req,res) => {
  try{
    const personId = req.params.id; //Extract the id from the url paramater
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
      new: true, // Run the updated documents
      runValidators: true, // Run the mongoose Validation
    })

    if(!response) {
      return res.status(404).json({error:'Person not found'});
    }
    console.log('data updated');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server error'});
  }
});

//delete
router.delete('/:id', async(req,res) =>{
  try{
    const personId = req.params.id; // Extract the person id from the url parameter

    //Assuming you have a person model
    const response = await Person.findByIdAndDelete(personId);

    if(!response) {
      return res.status(404).json({error:'Person not found'});
    }
    console.log('data delete');
    res.status(200).json({message:'person deleted successfully'}
    );
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})

module.exports = router;