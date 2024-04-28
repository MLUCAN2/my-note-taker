// My modules
const fs= require ('fs');
const path= require ('path');

// Function to read and send JSON response to user
function readNotes (req, res){
    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err,data) =>{
        if (err){
            console.error(err);
            return res.status(500).json({error: 'Could not read notes'});
        }
        const notes= JSON.parse(data);
        res.json(notes);
    });
}
// Export to the main server file
module.exports= readNotes;