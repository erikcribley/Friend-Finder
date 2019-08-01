//dependencies
let express = require("express")
let path = require("path")

//express
let app = express()
let PORT = 3000

//parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"))
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"))
})

//starts server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})