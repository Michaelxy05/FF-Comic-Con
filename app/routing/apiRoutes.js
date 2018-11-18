// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    
    //Recieve user input
    var user = req.body;

    //parseINT input
    for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }

    var bestMatch = 0;
    var differenceAllowed = 45;

    for (var i = 0; i < friendsData[i].length; i++) {
        var totalDifference = 0;
        for(var x = 0; x < friendsData[i].scores.length; x++) {
            var difference = Math.abs(user.scores[x] - friendsData[i].scores[x]);
            totalDifference += difference;
        }
        if(totalDifference < differenceAllowed) {
            bestMatch = i;
            differenceAllowed = totalDifference;
        }
    }
    
    friendsData.push(user);

    res.json(friendsData[bestMatch]);
    console.log("=======================================================");
    console.log(friendsData);
  });


  
};
