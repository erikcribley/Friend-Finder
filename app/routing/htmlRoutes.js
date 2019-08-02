//dependencies
let express = require("express")
let path = require("path")

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
}


// //dependencies
// let express = require("express")
// let path = require("path")

// let router = express.Router()

// router.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"))
// })

// router.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/survey.html"))
// })

// module.exports = htmlRoutes.js