const mongoose = require('mongoose');

//Define the Person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age:{
    type: Number
  },
  work:{
    type: String,
    enum: ['chef', 'waiter', 'manager'],
    required: true
  },
  mobile:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  addresses:{
    type: String
  },
  salary:{
    type:Number,
    required: true
  }
});

// create person model
const Person = mongoose.model('models',personSchema);
module.exports = Person;