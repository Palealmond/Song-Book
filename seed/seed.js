import connect from '../api/index.js'
import Songs from '../models/Songs.js'
import book from './songs.json' assert {type: 'json'}



Songs.deleteMany({})
Songs.create({ book.json() })