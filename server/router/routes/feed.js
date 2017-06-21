const db = require('../../db');
const { Image } = db.models;

module.exports = app => {
    app.get('/feed', (req, res) => {
      Image.find({}, (err, images) => {
        if(err) {
          res.json({
            code: 404,
            message: 'FEED IMAGES NOT FOUND',
            purpose: err.message,
          })
        }
        res.json(images)
      });
    })

}
