const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// post method for menuItem
router.post('/', async(req,res) => {
try{
  const data = req.body // Assuming the request body contains the person data
  //Create a new menu document using the Mongoose Model
  const newMenu = new MenuItem(data);

  //save the new menu to the data
  const response = await newMenu.save();
  console.log('data saved');
  res.status(200).json(response);
}catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal server error'});
}
});

//GET method for menu
router.get('/', async(req,res) => {
  try{
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
  res.status(500).json({error:'Internal Server Error'});
  }
})

router.get('/:tasteType', async(req,res) => {
  try{
    const tasteType = req.params.tasteType.toLowerCase();
    if(['sweet','spicy','sour'].includes(tasteType)){
      const response = await MenuItem.find({taste:tasteType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error:'Invalid tasteType'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})

router.put('/:id', async(req,res)=>{
try{
  const menuId = req.params.id; //Extract the id from the url parameter
  const updatedMenuData = req.body;
  
  const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuData,{
    new: true,     //run the updated documents 
    runValidators: true, //run the mongoose validation 
  })

  if(!response){
  return res.status(404).json({error:'menu not found'});
  }

  console.log('data updates')
  res.status(200).json(response);
  }
catch(err){
  console.log(err);
  res.status(500).json({error:'Internal server error'})
}
})
//comment add for exports
module.exports = router;


