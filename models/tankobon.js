const mongoose = require('mongoose')

const tankobonSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  japaneseTitle: String,
  writer: { type: String, required: true, unique: false },
  illustrator: String,
  volume: Number,
  cover: String,
  genres: [ String ],
  englishPublisher: String,
  japanesePublisher: String,
  startDate: Number,
  anime: { type: String, required: true, unique: false }
})

module.exports = mongoose.model('Tankobon', tankobonSchema)