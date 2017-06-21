const db = require('../../db');
const { Image } = db.models;

console.log('IMAGE >> ', Image)

module.exports = app => {

    app.post('/images/:user_id', (req, res) => {
      const user_id = req.params;
      const image = req.


      /*
        post this to the AWS S3
        then ...
      */
      res.json({
        message: 'THIS ROUTE IS STILL BEING WORKED ON'
      })
      // Image.create(user)
      //   .then(user => {
      //     res.json(user)
      //   })
      //   .catch(err =>
      //     res.json({
      //       code: 500,
      //       message: 'ERROR CREATING USER',
      //       purpose: err.message,
      //     })
      //   )
    })

    app.put('/images/:image_id', (req, res) => {
      const image_id = req.params;
      const image = req.body;




      Image.findOneAndUpdate({_id: image_id}, image)
        .then(image => {
          res.json(image)
        })
        .catch(err =>
          res.json({
            code: 500,
            message: 'ERROR CREATING USER',
            purpose: err.message,
          })
        )
    })


}
