var friendData = require("../data/friends.js");

module.exports = function (app) { //app to represent express

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        
        console.log(newFriend);

    });

}