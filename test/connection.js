const mongoose = require("mongoose")

// ES6 Promises
mongoose.Promise = global.Promise;

//connect to the db before test run
before(function(done){
  //connect to mongodb
mongoose.connect('mongodb://localhost/data');
mongoose.connection.once('open',function(){
  console.log('Connection has been made, now make fireworks...');
  done();
}).on('error',function(error){
  console.log('connection error', error);
  });
});
