const Manga = require('../models/manga')

function index(req, res ) {
  Manga
    .find()
    .then(foundMangas => res.status(200).json(foundMangas))
    .catch(err => res.json(err))
}

function create(req, res) {
  Manga
    .create(req.body)
    .then(createdManga => res.status(201).json(createdManga))
    .catch(err => res.json(err))
}

function show(req, res) {
  Manga
    .findById(req.params.id)
    .then(manga => res.status(202).json(manga))
    .catch(err => res.json(err))
}

function update(req, res) {
  Manga
    .findById(req.params.id)
    .then(manga => {
      if (!manga) return res.status(404).json({ message: 'Not Found' })
      Object.assign(manga, req.body)
      return manga.save()
    })
    .then(updatedManga => res.status(202).json(updatedManga))
}

function retire(req, res) {
  Manga
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(204))
    .catch(err => res.json(err))
}

module.exports = { index, create, show, update, retire }