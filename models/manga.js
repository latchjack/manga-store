const mongoose = require('mongoose')

const mangaSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  japaneseTitle: String,
  writer: { type: String, required: true, unique: false },
  illustrator: String,
  volume: { type: Number, required: true, unique: false },
  cover: { type: String, required: true, unique: false },
  genres: [ String ],
  englishPublisher: String,
  japanesePublisher: String,
  startDate: Number,
  anime: { type: String, required: true, unique: false }
}, {
  timestamps: true
})

module.exports = mongoose.model('Manga', mangaSchema)