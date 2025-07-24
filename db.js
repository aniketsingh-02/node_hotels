const mongoose = require('mongoose');

//setup mongoDB connection

mongoose.connect ('mongodb://localhost:27017/hotels'); //Replace 'mydatabase' with your database name


const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
  console.log('connected to mongoDB server');
})

db.on('error',(err) => {
  console.log('MongoDB connection error',err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

//export the database connection
module.exports = db;