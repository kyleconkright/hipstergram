'use strict'
let db;
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const MONGO_URL = 'mongodb://localhost:27017/hipstrgram';

const userSchema    = require('./schemas/User.js')
const imageSchema   = require('./schemas/Image.js')
// const commentSchema = require('./schemas/Comment.js')

mongoose.connect(MONGO_URL)

db = mongoose.connection

db.model('User', userSchema)
db.model('Image', imageSchema)
// db.model('Comment', commentSchema)

module.exports = db;
