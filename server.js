const fs = require ('fs');
const express= require ('express');
const path= require ('path');
const api= require ('./public/assets/index.js')

const PORT = process.env.port || 3001;
const app = express();

// We will need middleware for parsing JSON 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);
app.use(express.static('public'));
// We will need to define our routes


// We will need to start our server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

