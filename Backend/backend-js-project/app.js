const express = require('express')

const app = express()


//GET / POST / PUT / DELETE / PATCH

app.get('/', (req, res) => {
    console.log("Loading start page");
    res.send("Hello world")
});

app.get('/home', (req, res) => {
    console.log("Loading home page");
    res.send("This is home")
})

app.listen(8000, () => {
    console.log("http://localhost:8000/");
});