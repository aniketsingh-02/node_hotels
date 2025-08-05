const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

//Middleware Function
const logRequest = (req, res ,next) => {
  console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`);
  next(); //Move to the next phase
}

//apply middleware to all routes
app.use(logRequest);

app.use(passport.initialize());

//define routes
const localAuthMiddleware = passport.authenticate('local', {session: false});
app.get('/',(req, res) => {
  res.send('Welcome to my hotel');
})


//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
//const Person = require('./models/Person');

//Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
