const router = require('express').Router()
const mangas = require('../controllers/mangas')
// const users = require('../controllers/auth')
// const secureRoute = require('../lib/secureRoute')

router.route('/mangas')
  .get(mangas.index)
  // .post(secureRoute, mangas.create)

router.route('/mangas/:id')
  .get(mangas.show)
  // .put(secureRoute, mangas.update)
  // .delete(secureRoute, mangas.retire)

router.route('/register')
// .post(users.register)

router.route('/login')
// .post(users.login)

module.exports = router