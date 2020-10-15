import { useState } from 'react'
import clsx from 'clsx'
import {
  Modal,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  InputAdornment,
  Grid,
  IconButton,
  TextField,
} from '@material-ui/core/'
import CreateIcon from '@material-ui/icons/Create'
import NotesIcon from '@material-ui/icons/Notes'
import useStyles from '@Components/Modal/modal.styles'

export default function InputModal({ handleClose, open }) {
  const classes = useStyles()
  const [value, setValue] = React.useState('green')

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  // getModalStyle is not a pure function, we roll the style only on the first render

  const body = (
    <div className={classes.stage}>
      <Grid container className={classes.paper}>
        <Grid item xs={4}>
          <h2 id='simple-modal-title'>Pick a color.</h2>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Colors</FormLabel>
            <RadioGroup
              aria-label='Colors'
              name='colorValue'
              value={value}
              onChange={handleChange}>
              <FormControlLabel value='red' control={<Radio />} label='Red' />
              <FormControlLabel value='blue' control={<Radio />} label='Blue' />
              <FormControlLabel value='pink' control={<Radio />} label='Pink' />
              <FormControlLabel
                value='yellow'
                control={<Radio />}
                label='Yellow'
              />
              <FormControlLabel
                value='green'
                control={<Radio />}
                label='Green'
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid xs={8}>
          <FormControl component='fieldset'>
            <h2 id='simple-modal-title'>Enter a Note</h2>
            <TextField label='Title' className={clsx(classes.textField)} />
            <TextField
              label='Notes'
              multiline
              rows={10}
              className={clsx(classes.textField)}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  )

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        {body}
      </Modal>
    </div>
  )
}
