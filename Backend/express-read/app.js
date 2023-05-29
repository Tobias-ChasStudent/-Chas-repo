const express = require('express')
const fs = require('fs')

const app = express()

const data = fs.readFileSync('./people.txt', 'utf8')


//GET / POST / PUT / DELETE / PATCH

app.get('/', (req, res) => {
    console.log(data);
    console.log("Loading start page");
    res.send(data)
});

app.listen(8000, () => {
    console.log("http://localhost:8000/");
});