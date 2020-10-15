import mongoose from 'mongoose'

const NoteSchema = {
  title: {
    type: String,
    required: [true, 'A note needs a title.'],
  },
  note: {
    type: String,
    required: [true, 'A note needs a note.'],
  },
  // color: {
  //   type: String,
  //   required: true,
  // },
  // createdAt: {
  //   type: Date,
  //   required: false,
  // },
}

module.exports = mongoose.models.Notes || mongoose.model('Note', NoteSchema)
