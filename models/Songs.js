import mongoose from 'mongoose'

const SongsSchema = new mongoose.Schema({
  _id: String,
  title: String,
  song: [{
    key: String,
    prog: String,
    author: String,
    original: Boolean
  }]
})


export default mongoose.model('Songs', SongsSchema)