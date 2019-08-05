//dependencies
let express = require("express")
let path = require("path")
let htmlRoutes = require("./app/routing/htmlRoutes.js")
let apiRoutes = require("./app/routing/apiRoutes")

//express
let app = express()
let PORT = process.env.PORT || 3000

//parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(htmlRoutes)
app.use(apiRoutes)

//starts server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})