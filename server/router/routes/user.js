
const db = require('../../db');
const { User } = db.models;
const isUniqueId = require('../../utils/idGenerator.js')




module.exports = app => {
    app.get('/me', (req, res) => {

    })

    app.get('/users', (req, res) => {

      User.find()
        .then(user => {
          res.json(user)
        })
        .catch(err =>
          res.json({
            code: 500,
            message: 'ERROR GETTING USERS',
            purpose: err.message,
          })
        )
    })

    app.post('/users/', (req, res) => {
      const user = req.body;

      return isUniqueId(User)
        .then(id => {
          user.id = id
          return Promise.resolve(user);
        })
        .then(user => {
          User.create(user)
            .then(user => {
              res.json(user)
            })
            .catch(err => {
              if (err) throw new Error(err.message)
            })
        })
        .catch(err =>
          res.json({
            code: 500,
            message: 'ERROR CREATING USER',
            purpose: err.message,
          })
        )
    })

    app.put('/users/:_id', (req, res) => {
      const { _id } = req.params;
      const user = req.body;

      User.findOneAndUpdate({_id}, user, (err, user) => {

        if(err) {
          res.json({
            code: 500,
            message: 'ERROR UPDATING USER',
            purpose: err.message,
          })
        }
        res.json(user)
      })
    })
}
