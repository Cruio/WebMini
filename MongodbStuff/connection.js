const mongoose = require("mongoose")
const Score  = mongoose.Schema



mongoose.connect('mongodb://localhost/ScoreData');
mongoose.connection.once('open',function(){
  console.log('Connection has been made, now make fireworks...');

}).on('error',function(error){
console.log('connection error', error);

});

const HighScore = new Score({
name: String,
score: Number

});

const ScoreScore = mongoose.model("ScoreData", HighScore);

module.exports = ScoreScore;


const assert = require('assert');
const ScoreScore2 = require('../MongodbStuff/connection');

//describe tests


  //create test
  it('saves a record to the database',function(done){

      var char = new ScoreScore2({
        name: 'Lars',
        score: 300
      });


      char.save().then(function(){
        assert(char.isNew === false);
        done();
      });




});
