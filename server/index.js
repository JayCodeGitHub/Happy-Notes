const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const noteRouter = require('./src/routes/note')
const Note = require('./src/models/note');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/note', noteRouter)



mongoose.connect('mongodb://mongo:27017/HappyNotes', { useNewUrlParser: true, useUnifiedTopology: true});


const port = 8080

app.listen(port, function() {
    console.log(`App listening at http://localhost:${port}`);
})