//dependencies
let express = require("express")
let path = require("path")

//express
let app = express()
let PORT = process.env.PORT || 3000

//parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routers
let htmlRoutes = require("./app/routing/htmlRoutes.js")(app)

//starts server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})