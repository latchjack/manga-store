const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { dbURI } = require('../config/environment')
const Tankobon = require('../models/tankobon')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()

  Tankobon.create([{
    title: 'Dragonball',
    japaneseTitle: 'Doragon Boru',
    writer: 'Akira Toriyama',
    illustrator: 'Akira Toriyama',
    volume: 1,
    cover: '',
    genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
    englishPublisher: 'Viz Media',
    japanesePublisher: 'Shueisha',
    startDate: 1984,
    anime: 'Yes'
  }])
})