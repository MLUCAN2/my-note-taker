// My modules
const fs= require ('fs');
const path= require ('path');

// Function to read and send JSON response to user
function deleteNotes (req, res){
    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Could not read the notes'});
        }
        let notes= JSON.parse(data);
        const deleteId= req.params.id;
        const updateNotes= notes.filter(note=> note.id !== deleteId);

        fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(updateNotes), err =>{
            if (err) {
                console.error(err);
                return res.status(500).json({error: 'Could not delete the note'});
            }
            res.status(200).json({message: 'Deleted note'})

        })

    })
};
// Export to the main server file
module.exports= deleteNotes;
