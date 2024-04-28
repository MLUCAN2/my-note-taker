// Modules
const path= require('path');
const express= require ('express');
const addNotes= require('./db/addNotes.js');
const readNotes= require('./db/readNotes.js');
const deleteNotes= require('./db/deleteNotes.js');

// Server
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, './public')));

// Middleware to parse data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes to read, add, and delete notes
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, './public/notes.html')));
app.get('/api/notes', readNotes);
app.post('/api/notes', addNotes);
app.delete('/api/notes/:id', deleteNotes);


// We will need to start our server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

