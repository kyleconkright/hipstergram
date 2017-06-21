const db = require('../../db');
const { User } = db.models;



module.exports = app => {
    app.get('/me', (req, res) => {

    })

    app.post('/users/', (req, res) => {
      const user = req.body;
      User.create(user)
        .then(user => {
          res.json(user)
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
        console.log('no error >> ')
        res.json(user)
      })
    })
}
