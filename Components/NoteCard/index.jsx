import React from 'react'
import { Paper, Box, Typography } from '@material-ui/core'
import useStyles from './note.styles'

const NoteCard = (props) => {
  const classes = useStyles()
  const { title, note, color } = props
  return (
    <Box>
      <Paper style={{ backgroundColor: color }} className={classes.note}>
        <Typography variant='h4' className={classes.noteTitle}>
          {title}
        </Typography>
        <Typography variant='h5' className={classes.noteBody}>
          {note}
        </Typography>
      </Paper>
    </Box>
  )
}

export default NoteCard
