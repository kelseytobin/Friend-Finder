var path = require("path");

//pull in data we need for api routes
var friendData = require("../data/friends.js");

module.exports = function (app) { //app to represent express

    app.get("/api/list", function (req, res) {
        return res.json(friendData);
    });

    app.post("/api/list", function (req, res) {
        var newFriend = req.body;

        friendData.push(newFriend);
        res.json(true);
        

    });

}