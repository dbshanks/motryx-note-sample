import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import {
  Modal,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  TextField,
} from '@material-ui/core/'
// import CreateIcon from '@material-ui/icons/Create'
// import NotesIcon from '@material-ui/icons/Notes'
import useStyles from '@Components/Modal/modal.styles'

export default function InputModal({ handleClose, open }) {
  const classes = useStyles()
  const [value, setValue] = React.useState('pink')

  const [form, setForm] = useState([
    {
      title: '',
      note: '',
      // color: '',
    },
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()

  const createNote = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/not', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let errs = validate()
    setErrors(errs)
    setIsSubmitting(true)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    let err = {}
    if (!form.title) {
      err.title = 'A valid title is required'
    }
    if (!form.note) {
      err.note = 'A note is required'
    }
    // if (!form.color) {
    //   err.color = 'A color is required'
    // }

    return err
  }

  const handleValue = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createNote()
      } else {
        setIsSubmitting(false)
      }
    }
  }, [errors])
  // getModalStyle is not a pure function, we roll the style only on the first render

  const body = (
    <div className={classes.stage}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container className={classes.paper}>
          <Grid item xs={4}>
            <h2 id='simple-modal-title'>Pick a color.</h2>

            <FormControl component='fieldset'>
              <FormLabel component='legend'>Colors</FormLabel>
              {/* <RadioGroup
                aria-label='Colors'
                name='color'
                value={value}
                onChange={handleChange}>
                <FormControlLabel value='red' control={<Radio />} label='Red' />
                <FormControlLabel
                  value='blue'
                  control={<Radio />}
                  label='Blue'
                />
                <FormControlLabel
                  value='pink'
                  control={<Radio />}
                  label='Pink'
                />
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
              </RadioGroup> */}
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <FormControl component='fieldset'>
              <h2 id='simple-modal-title'>Enter a Note</h2>
              <TextField
                label='Title'
                name='title'
                className={clsx(classes.textField)}
                onChange={handleChange}
              />
              <TextField
                label='Notes'
                multiline
                rows={10}
                name='note'
                className={clsx(classes.textField)}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Button variant='contained' color='secondary' type='submit'>
            Create Note
          </Button>
        </Grid>
      </form>
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
