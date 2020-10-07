const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Manga = require('../models/manga')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return Manga.create([
        {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 1,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db001.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 2,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db002.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 3,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db003.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 4,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db004.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 5,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db005.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 6,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db006.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 7,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db007.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 8,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db008.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 9,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db009.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 10,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db010.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 11,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db011.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 12,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db012.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 13,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db013.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 14,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db014.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 15,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db015.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }, {
          title: 'Dragonball',
          japaneseTitle: 'Doragon Boru',
          writer: 'Akira Toriyama',
          illustrator: 'Akira Toriyama',
          volume: 16,
          cover: 'https://raw.githubusercontent.com/latchjack/manga-covers/master/dragon-ball/db016.jpg',
          genres: [ 'Action', 'Adventure', 'Fighting', 'Fantasy' ],
          englishPublisher: 'Viz Media',
          japanesePublisher: 'Shueisha',
          startDate: 1984,
          anime: 'Yes'
        }
      ])
    })

  
    .then(createdMangas => console.log(`${createdMangas.length} mangas created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})