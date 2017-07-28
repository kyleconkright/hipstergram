'use strict';
let db;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URL = 'mongodb://localhost:27017/hipstergram-local';

const userSchema = require('./schemas/User.js');
const postSchema = require('./schemas/Post.js');
// const commentSchema = require('./schemas/Comment.js')

mongoose.connect(MONGO_URL);

db = mongoose.connection;

db.model('User', userSchema);
db.model('Post', postSchema);
// db.model('Comment', commentSchema)

module.exports = db;
