const router = require('express').Router()
const mangas = require('../controllers/mangas')

router.route('/mangas')
  .get(mangas.index)

module.exports = router