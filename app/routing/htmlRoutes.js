//dependencies
let express = require("express")
let path = require("path")

const htmlRouter = express.Router()

htmlRouter
    .get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
    .get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

module.exports = htmlRouter