const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
  id: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  updated: { type: Date, default: Date.now }
});
