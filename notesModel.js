class NotesModel {
    constructor() {
        this.notes = [];
    }
    getNotes() {
        return this.notes;
    }

    addNote(note) {
        this.notes.push(note);
    }
    
    reset() {
        this.notes.length = 0
    }


    }


module.exports = NotesModel