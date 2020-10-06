const PORT = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/manga4u'

module.exports = { PORT, dbURI }

