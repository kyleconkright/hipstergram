const db = require('../../db');
const { Post } = db.models;
const isUniqueId = require('../../utils/idGenerator.js')

module.exports = app => {

    app.post('/posts', (req, res) => {
      const newPost = req.body;

      /*
        post this to the AWS S3
        then ...
      */
      return isUniqueId(Post)
        .then(id => {
          newPost.id = id;
          Post.create(newPost)
            .then(newPost => {
              res.json(newPost)
            })
            .catch(({message}) => {
              throw new Error(message)
            })
        })
        .catch(err =>
          res.json({
            code: 500,
            message: 'ERROR CREATING POST',
            purpose: err.message,
          })
        )

    })

    app.put('/posts/:post_id', (req, res) => {
      const { post_id } = req.params;
      const post = req.body;
      Post.findOne({id: post_id})
        .then(found => {
          if(!found) throw new Error('Error Updating Post');
          return Post.update({id: post_id}, post)
            .then(updatedPost => {

              return updatedPost
            })
            .catch(({message}) => {throw new Error(message)})
        })
        .then(updated => {
          if(!updated.ok) throw new Error('Error Updating Post');
          return Post.findOne({id: post_id})
            .then(newestPost => {

              return newestPost
            })
            .catch(({message}) => {throw new Error(message)})
        })
        .then(latest => {
          res.json(latest)
        })
        .catch(err =>
          res.json({
            code: 500,
            message: 'ERROR UPDATING POST',
            purpose: err.message,
          })
        )
    })


    app.put('/like/:post_id', (req, res) => {
      const { post_id } = req.params;
      Post.findOne({ id: post_id })
        .then(post => {
          if(!post) throw new Error('No post found to be liked.')
          ++post.votes
          console.log('\npost votes should be going up by one >>> ', post.votes)
          return Post.update({id: post_id}, post)
            .then(newPost => {
              if(!newPost.ok) throw new Error('Error liking photo')
              return post;
            })
        })
        .then(updatedPost => {
          if(!updatedPost) throw new Error('Post likes not updated')
          res.json(updatedPost)
        })
        .catch(({ message }) => {
          res.json({
            code: 500,
            message: 'ERROR LIKING POHTOO'
          })
        })
    })


}
