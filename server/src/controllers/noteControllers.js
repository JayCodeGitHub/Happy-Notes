const Note = require('../models/note');

class NoteController {
    async getAllNotes(req, res) {
        res.status(200).json("allNotes");

    }
    async saveNote(req, res) {
        const itemType = req.body.itemType;
        const title = req.body.title;
        const body = req.body.body;

        let note;

        try {
            note = new Note({itemType, title, body})
            await note.save();
        } catch(err) {
            return res.status(422).json({message: err.message});
        }

        res.status(201).json(note)
    }
    async deleteNote(req, res) {
        res.status(201).json("deleteNote")
    }
}

module.exports = new NoteController();