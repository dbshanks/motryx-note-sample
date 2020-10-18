import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { motion } from 'framer-motion'
import { Paper, Box, Typography, CircularProgress } from '@material-ui/core'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep'
import useStyles from './note.styles'

const NoteCard = (props) => {
  const { _id, title, note, color, constraintsRef } = props
  const classes = useStyles()

  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isDeleting) {
      deleteNote()
    }
  }, [isDeleting])

  const deleteNote = async () => {
    const noteId = _id
    try {
      const deleted = await fetch(`http://localhost:3000/api/note/${noteId}`, {
        method: 'Delete',
      })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true)
  }
  return (
    <Fragment>
      <Fragment>
        {isDeleting ? (
          <CircularProgress color='secondary' />
        ) : (
          <motion.div drag dragConstraints={constraintsRef} key={_id}>
            <Box>
              <Paper
                style={{ backgroundColor: color }}
                className={classes.note}>
                <Box>
                  <Typography variant='h6' className={classes.noteTitle}>
                    {title}
                  </Typography>
                </Box>
                <Box className={classes.noteBodyContainer}>
                  <Typography variant='body1' className={classes.noteBody}>
                    {note}
                  </Typography>
                </Box>
                <Box className={classes.deleteBar}>
                  <DeleteSweepIcon
                    className={classes.deleteIcon}
                    onClick={handleDelete}
                  />
                </Box>
              </Paper>
            </Box>
          </motion.div>
        )}
      </Fragment>
    </Fragment>
  )
}

export default NoteCard
