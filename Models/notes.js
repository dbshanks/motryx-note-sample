const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A note needs a title.'],
  },
  note: {
    type: String,
    required: [true, 'A note needs a note.'],
  },
  color: {
    type: String,
    required: [true, 'A color value is required'],
  },
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema)
