import dbConnect from '@Utils/dbconnect'
import Note from '@Models/notes'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const data = await Note.findById(id)

        if (!data) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: data })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        const data = await Note.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })

        if (!data) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: data })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const deletedData = await Note.deleteOne({ _id: id })
        if (!deletedData) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
        console.log(error)
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
