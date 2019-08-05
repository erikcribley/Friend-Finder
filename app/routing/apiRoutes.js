//dependencies
let express = require("express")
let path = require("path")

//set up router
const apiRoutes = express.Router()
apiRoutes
    .get('/api/friends', function(req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.js"))
    })

//export router
module.exports = apiRoutes