// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./server/router/');
const appRouter = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');

const PREFIX = '/hipstr-api/';
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

router.route(appRouter);
app.use(PREFIX, appRouter);
app.use(cors());

app.use(express.static(__dirname + '/dist'));

mongoose.connect(process.env.MONGODB_URI);

var Post = mongoose.model('Post', { username: String, createdAt: Date });

var post = new Post({ username: 'Sylvester', createdAt: new Date() });

post.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('saved');
    }
});

app.get('/posts', (req, res) => {
    Post.find({}, function (err, docs) {
        res.json(docs)
    });
})

app.get('/post/:id', (req, res) => {
    Post.find({'_id': req.params.id }, function (err, docs) {
        res.json(docs)
    });
})

app.get('/post/add', (req, res) => {
    post.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('saved');
        }
    });
})

app.listen(PORT, () => {
    console.log(`LISTENING TO ${PREFIX}  ON: ${PORT}! While it's still cool... `);
});