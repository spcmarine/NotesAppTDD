const NotesModel = require("./notesModel")
// const model = new NotesModel();

// model.getNotes(); // should return []

// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return []

describe("newNotesModel", () => {
    it("When we call 'getNotes' on a new instance it returns an empty list", () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([])
    })
    it("We are able to add two items to our list and return them", () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
    })
    it("We expect that when we call 'reset' we then are able to return an empty list", () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        model.reset();
        expect(model.getNotes()).toEqual([])
    })

})