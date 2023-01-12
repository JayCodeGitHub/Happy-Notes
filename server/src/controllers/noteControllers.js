class NoteController {
    async getAllNotes(req, res) {
        res.status(200).json("allNotes");

    }
    async saveNote(req, res) {
        res.status(201).json("saveNote")
    }
    async deleteNote(req, res) {
        res.status(201).json("deleteNote")
    }
}

module.exports = new NoteController();