import mongoose from 'mongoose'
import 'dotenv/config'
import Songs from '../models/Songs.js'
import bookData from './book.json' assert {type: 'json'}



console.log(process.env.DATABASE_URL)

//@ts-ignore
await mongoose.connect(process.env.DATABASE_URL)


await Songs.deleteMany({})
await Songs.insertMany(bookData)

await mongoose.disconnect()



