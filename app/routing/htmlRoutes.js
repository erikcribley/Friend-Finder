//dependencies
let express = require("express")
let path = require("path")

//set up router
const htmlRoutes = express.Router()
htmlRoutes
    .get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
    .get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

//export router
module.exports = htmlRoutes