var path = require("path");

//pull in data we need for api routes
var friendData = require("../data/friends.js");

module.exports = function (app) { //app to represent express

    app.get("/api/list", function (req, res) {
        return res.json(friendData);
    });

    app.post("/api/list", function (req, res) {
        var newFriend = req.body;
        var newScore = newFriend.scores;
        var scoreTotal = 0;
        var highestMatch = 100;
        var index = -1;

        //loop through every entry in friend away, calculate and compare score total to retrieve match
        for (var i = 0; i < friendData.length; i++) {
            
            total = 0;

            for (var j = 0; j < newScore.length; j++) {
                
                var diff = Math.abs(newScore[j] - friendData[i].scores[j]);
                scoreTotal += diff;
            }
            if (scoreTotal < highestMatch) {
                highestMatch = scoreTotal;
                index = i;
            }
        }

        friendData.push(newFriend);
        res.json(friendData[index]);
        

    });

}