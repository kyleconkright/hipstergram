const db = require('../../db');
const { Post, User } = db.models;

module.exports = app => {
  app.get('/feed', (req, res) => {
    Post.find()
      .then(posts => {
        return posts;
      })
      .then(posts => {
        const formattedPosts = posts.map(post => {
          // going to find user associated with post
          // User.find({});
        });
        res.json(posts);
      })
      .catch(err => {
        res.json({
          code: 404,
          message: 'FEED NOT FOUND',
          purpose: err.message
        });
      });
  });
};
