import Song from '../models/Songs.js'

export const getSongs = async (req, res) => {

  try {
    const songs = await Song.find()
    res.json(songs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getSong = async (req, res) => {
  // console.log('dadadad')
  // res.json({
  //   fuck: 'you'
  // })
  try {
    const title = req.params.title
    const songs = await Song.find({ title: title })

    if (songs.length > 0) {
      return res.json(songs)
    } else {
      res.status(404).json({ message: 'Song does not exit, yet!' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const createSong = async (req, res) => {
  try {
    const songs = new Song(req.body)
    await songs.save()
    res.status(201).json(songs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateSong = async (req, res) => {
  try {
    const { id } = req.params
    const songs = await Song.findByIdAndUpdate(id, req.body)
    res.status(201).json(songs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteSong = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Song.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send('The song has returned to the primordial ooze!')
    }

    throw new Error('Sorry Dave, I cannot find that song')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
