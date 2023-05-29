const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('hbs', exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs"
}))

app.set("view engine", "hbs")

app.use(express.static('public'))

//GET / POST / PUT / DELETE / PATCH

app.get('/', (req, res) => {
    console.log("Loading start page");
    const data = {
        message: "Hello from the other side"
    }
    res.render("home", data)
});

app.get('/people', (req, res) => {
    const data = {
        people: [
            {
                name: "Linus"
            },
            {
                name: "Gilbert"
            },
            {
                name: "Sandra"
            },
            {
                name: "Pippi"
            }
        ]
    }
    res.render("people", data)
})
app.get('/about-us', (req, res) => {
    res.render("about-us")
})

app.listen(8000, () => {
    console.log("http://localhost:8000");
})