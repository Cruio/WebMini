var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/poop");
var nameSchema = new mongoose.Schema({
    name: String,
    score: String
});
var User = mongoose.model("User", nameSchema);

app.use(express.static("Webmini"));



  MongoClient = require('mongodb').MongoClient;
  url = "mongodb://localhost:27017/";

test ='JO IS IT ME YOU AR LOOKING FOR';


MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("poop");
   dbo.collection("users").find({}).toArray(function(err, result) {
     if (err) throw err;
     console.log(result[2]['score']);


     db.close();
   });

 });


app.post("/Score", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
          res.sendFile(__dirname + "/" + "Webmini/WebMini.html");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/" + "Webmini/WebMini.html");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
