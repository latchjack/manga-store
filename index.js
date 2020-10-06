const express = require('express')
const mongoose = require('mongoose')
const app = express()

const { PORT, dbURI } = require('./config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is connected')
  })

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`))
