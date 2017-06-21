const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

module.exports = new Schema({
  userId:  Number,
  caption: String,
  updated: { type: Date, default: Date.now },
  url:     String,
  votes:   { type: Number, default: 0},
  deleted: Boolean,
})
