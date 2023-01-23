const jwt = require('jsonwebtoken');
const Note = require('../models/note');

class NoteController {
    async getAllNotes(req, res) {
        let doc;

        const token = req.header('authorization');
        let decoded = jwt.decode(token);
        let creator = decoded._id

        try {
            doc = await Note.find({ creator: creator});
        } catch(err) {
            res.status(500).json({message: err.message});
        }
        res.status(200).json(doc);

    }
    async saveNote(req, res) {
        const itemType = req.body.itemType;
        const title = req.body.title;
        const body = req.body.body;
        const token = req.body.creator;
        let decoded = jwt.decode(token);
        let creator = decoded._id

        let note;

        try {
            note = new Note({itemType, creator, title, body})
            await note.save();
        } catch(err) {
            return res.status(422).json({message: err.message});
        }

        res.status(201).json(note)
    }
    async deleteNote(req, res) {
        try {
            const _id = req.params._id;
            await Note.deleteOne({_id: _id});
        } catch(err) {
            return res.status(422).json({message: err.message});
        }
        res.sendStatus(204)
    }
}

module.exports = new NoteController();