const mangas = require('../models/tankobon')

function indexRoute(req, res, next) {
  Tankobon
    .find()
    .exec()
    .then(mangas => res.json(mangas))
    .catch(next)
}

module.exports = {
  index: indexRoute
}