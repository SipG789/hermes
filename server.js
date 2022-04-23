
// TODO: require fs, express, apiroutes, ports, json 

const express = require('express');
const { notes } = require('./db/db.json');
const path = require('path');

// instantiate server
const PORT = process.env.PORT || 3001;
const app = express();
// TODO: GET * route should return index.html

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// TODO: GET / notes route should return notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
// TODO: Create API's

// TODO: GET /api/notes should read the db.json file and return all saved notes as JSON

// TODO: POST /api/notes should receive a new note to save on the request body, add it to the db.json file & return the new note to the client 

// TODO: Find a way to give each note a unique id when it's saved (look into npm packages that could do this)

// TODO: DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
    //TODO: read all notes from the db.json file, remove the note with the given id property, then rewrite the notes to the db.json file. 





// express listen 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  