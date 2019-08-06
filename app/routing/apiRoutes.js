//dependencies
let express = require("express")
let path = require("path")
let friends = require("../data/friends.js")

//set up router
const apiRoutes = express.Router()
apiRoutes
    .get('/api/friends', function(req, res) {
        res.json("friends")
    })
    .post('/api/friends', function (req, res) {

    })
    
//export router
module.exports = apiRoutes