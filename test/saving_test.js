const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('saving records',function(){

  //create test
  it('saves a record to the database',function(done){

      var char = new MarioChar({
        name: 'Lars',
        score: 300      
      });


      char.save().then(function(){
        assert(char.isNew === false);
        done();
      });


  });

});
