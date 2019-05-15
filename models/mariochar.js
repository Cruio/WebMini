const mongoose = require('mongoose');
const Schema = mongoose.Schema

//create schema and model

const MarioCharSchema = new Schema({
  name: String,
  score: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;
