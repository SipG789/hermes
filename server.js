
// require fs, express, apiroutes, ports, json 

const express = require('express');
const notes = require('./db/db.json');
const path = require('path');
const fs = require('fs');
// Find a way to give each note a unique id when it's saved (look into npm packages that could do this)
const { v4: uuidv4 } = require('uuid');

// instantiate server
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// GET / notes route should return notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'));
});


// Create API's: GET notes then rewrite the notes to the db.json file. 
app.get('/api/notes', (req, res) => {

    const previousNotes = JSON.parse(fs.readFileSync('./db/db.json'));

    res.json(previousNotes);
});

const noteId = uuidv4();

//  POST /api/notes should receive a new note to save on the request body, add it to the db.json file & return the new note to the client 
app.post('/api/notes', (req, res) => {
   // console.log(req.body);
    const oldNotes = JSON.parse(fs.readFileSync('./db/db.json'));

    req.body.id = oldNotes.length.noteId;

    const addNote = req.body;
    addNote.id = noteId;
    oldNotes.push(addNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(oldNotes));

    res.json(oldNotes);

});
// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
app.delete('/api/notes/:id', (req, res) => {
   // read all notes from the db.json file, remove the note with the given id property
    const prevNotes = JSON.parse(fs.readFileSync('./db/db.json'));

    const deletedNotes = prevNotes.filter (note => note.id !== req.params.id);

    fs.writeFileSync('./db/db.json', JSON.stringify(deletedNotes));

    res.json(deletedNotes);
});





//  GET * route should return index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
// express listen 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  