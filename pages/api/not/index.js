import dbConnect from '@Utils/dbconnect'
import Note from '@Models/notes'
dbConnect()

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const dataset = await Note.find({})
        res.status(200).json({ success: true, data: dataset })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const data = await Note.create(req.body)
        res.status(201).json({ success: true, data: data })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
