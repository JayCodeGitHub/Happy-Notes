const express = require('express');
const mongoose = require('mongoose');
const noteRouter = require('./src/routes/index')
const Note = require('./src/models/note');

const app = express();

app.use('/api/note', noteRouter)



mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true});

const test = new Note({ title: 'test', body: 'test', itemType: 'notes' });
test.save().then(() => console.log('test'));

const port = 8080

app.listen(port, function() {
    console.log(`App listening at http://localhost:${port}`);
})