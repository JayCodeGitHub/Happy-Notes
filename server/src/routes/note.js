const express = require('express');
const router = express.Router();
const NoteController = require('../controllers/noteControllers');

router.get('/', NoteController.getAllNotes);
router.post('/', NoteController.saveNote);
router.delete('/:id', NoteController.deleteNote);

module.exports = router;