const express = require('express');
const router = express.Router();
const NoteController = require('../controllers/noteControllers');

router.get('/:itemType', NoteController.getAllNotes);
router.post('/', NoteController.saveNote);
router.delete('/:_id', NoteController.deleteNote);

module.exports = router;