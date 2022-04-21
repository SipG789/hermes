// TODO: getting started

// TODO: require fs, express, apiroutes, ports, json 
const express = require('express');
const { notes } = require('./Develop/db/db.json');

// instantiate server
const app = express();



// TODO: GET * route should return index.html

// TODO: Create API's

// TODO: GET /api/notes should read the db.json file and return all saved notes as JSON

// TODO: POST /api/notes should receive a new note to save on the request body, add it to the db.json file & return the new note to the client 

// TODO: Find a way to give each note a unique id when it's saved (look into npm packages that could do this)

// TODO: DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
    //TODO: read all notes from the db.json file, remove the note with the given id property, then rewrite the notes to the db.json file. 

// TODO: GET /notes route should return notes.html
app.get('/api/notes', (req, res) => {
    res.send('Hello');
});




// express listen 
app.listen(3001, () => {
    console.log('API server now on port 3001!');
});