const Note = require('../models/note');

class NoteController {
    async getUser(req, res) {
        res.status(200).json("user");

    }
}

module.exports = new NoteController();