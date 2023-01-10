const express = require('express');
const Router = require('./src/routes/index')

const app = express();

app.use('/', Router)

const port = 8080

app.listen(port, function() {
    console.log(`App listening at http://localhost:${port}`);
})