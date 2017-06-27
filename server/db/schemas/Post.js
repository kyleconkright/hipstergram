const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

module.exports = new Schema({
  id:      String,
  userId:  String,
  caption: String,
  updated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
  url:     String,
  votes:   { type: Number, default: 0},
  deleted: Boolean,
})
