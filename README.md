# Friend-Finder

I was unable to get the post method to work. Despite what appears to be proper syntax on the jQuery end

$.post("/api/friends", surveyResults, function(data) {
    console.log(data)
}

Attempts responded with 
500 (Internal Service Error) jquery-3.4.1.js:9837, 
failing to load the line
xhr.send( options.hasContent && options.data || null );

As as result, my attempt at the post from the router end was also unsuccessful 

    .post('/api/friends', function (req, res) {
        friends.push(req.body)
    })

friends.push was not recognized despire exporting friends as an array of objects (though it contains only the example
object, as I could not get others to post)

It is likely I did the exporting of friends.js incorrectly as I couldn't get the sample object in the array to display
in the /api/friends view, only an empty json object {}

I was able to correctly set up the router and htmlRoutes as well as the api GET route. The jQuery for the survey functions as well, returning the answers as an object, but displaying only in console.log

I also did a poor job making a modal without bootstrap and writing the functions to compare survey scores. I believe I could improve upon these with more time, however my vexation with the post errors pushed me far behind schedule.

Also included is an abandoned attempt to make sure the survey results would not post unless all fields were filled, out. It was not functional, I intend to return to it after getting the post methods to work.

UPDATE: The jQuery 500 error only happends in Chrome, so whatever else isn't working is unrelated to that