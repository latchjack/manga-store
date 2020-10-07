const express = require('express')
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
const app = express()
const { port, dbURI } = require('./config/environment')
// const logger = require('./lib/logger')
const router = require('./config/router')

mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is connected')
  })

app.use('/api', router)

app.listen(port, () => console.log(`Up and running on port ${port}`))
