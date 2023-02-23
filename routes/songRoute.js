import express from 'express'
import * as controllers from '../controllers/Song.js'

const router = express.Router()

router.get('/:title', controllers.getSong)
router.get('/', controllers.getSongs)
router.post('/', controllers.createSong)
router.put('/:title', controllers.updateSong)
router.delete('/:title', controllers.deleteSong)

export default router