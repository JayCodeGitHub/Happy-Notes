const express = require('express');
const mongoose = require('mongoose');
const Router = require('./src/routes/index')

const app = express();

app.use('/', Router)



mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

const port = 8080

app.listen(port, function() {
    console.log(`App listening at http://localhost:${port}`);
})