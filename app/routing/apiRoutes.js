//dependencies
let express = require("express")
let path = require("path")
let friends = require("./../data/friends.js")

// let app = express()

// //parsing
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

//set up router
const apiRoutes = express.Router()
apiRoutes
    .get('/api/friends', function(req, res) {
        res.json(friends)
    })
    .post('/api/friends', function (req, res) {
        friends.push(req.body)
    })

//export router
module.exports = apiRoutes

//attempt at comapring scores function
// let survey = {
//     name: "me",
//     photo: "picture.png",
//     score: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
// }


// let friendsArray = [
//     {
//     name: "steve",
//     photo: "thing.jpg",
//     score: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
//     },
//     {
//     name: "donny",
//     photo: "jpg.jpg",
//     score: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
//     },
//     {
//     name: "tommy",
//     photo: "selfie.png",
//     score: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
//     }
// ]


// function getScores () {
//     let otherScores = []
//     for (i = 0; i < friendsArray.length; i++) {
//         otherScores.push(friendsArray[i].score)
//     }
//     return otherScores
// }

// function compareScores (sc) {
//     let yourScore = survey.score
//     let differences = []
//     for (j = 0; j < sc.length; j++) {
//         differences.push(yourScore.map(x => x - j))
//     }
//     console.log(differences)
// } 

// compareScores(getScores())

