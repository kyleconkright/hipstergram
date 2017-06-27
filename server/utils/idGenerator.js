const randomstring = require('randomstring')

module.exports = model => {
  const newId = randomstring.generate(7);
  return model.find({id: newId})
    .then(instance => {

      if(!instance) {

        return isUniqueId(model)
      }
      if(instance) return newId;
    })
    .catch(err => {

      throw new Error(err.message)
    })
}
