const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

module.exports = new Schema({
  userId:  Number,
  imageId: Number,
  comment: String,
  deleted: Boolean,
  updated: { type: Date, default: Date.now },
})
