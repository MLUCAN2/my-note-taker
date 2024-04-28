// Modules
const fs= require ('fs');
const path= require ('path');
const { title } = require('process');
const uuid= require('./uuid');

// Function to add a note to the db
function addNote(req,res){
    const newNote= {title: req.body.title, text: req.body.text, id: uuid() };

    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data)=>{
        if (err){
            console.error(err);
            return res.status(500).json({ error: 'Could not read notes'});
    }
    const notes= JSON.parse(data);
    notes.push(newNote);

    fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(notes), err=>{
        if(err){
            console.error(err);
            return res.status(500).json({error: 'Could not add note'});
        }
        res.status(201).json({message: 'Success! Your note has been added!', note: newNote})

    });

});
}

// Export to the main server file
module.exports= addNote;

