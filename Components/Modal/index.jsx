import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import {
  Modal,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Grid,
  TextField,
} from '@material-ui/core/';
import useStyles from './modal.styles';

export default function InputModal({ handleClose, open }) {
  const classes = useStyles();
  const [color, setColor] = useState('');

  const [form, setForm] = useState([
    {
      title: '',
      note: '',
      color: '',
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const createNote = async () => {
    try {
      const res = await fetch('https://motryx-note.vercel.app/api/note', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setColor(e.target.value);
  };

  const validate = () => {
    let err = {};
    if (!form.title) {
      err.title = 'A valid title is required';
    }
    if (!form.note) {
      err.note = 'A note is required';
    }
    if (!form.color) {
      err.color = 'A color is required';
    }

    return err;
  };

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const body = (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container className={classes.paper}>
          <Grid item lg={4}>
            <h2 id='simple-modal-title'>Pick a color.</h2>

            <FormControl
              component='fieldset'
              fullWidth
              className={classes.formStage}>
              <RadioGroup
                aria-label='color'
                name='color'
                value={color}
                onChange={handleChange}>
                <FormControlLabel
                  value='#D84315'
                  control={<Radio style={{ color: '#D84315' }} />}
                  label='Red'
                />
                <FormControlLabel
                  value='#0277BD'
                  control={<Radio style={{ color: '#0277BD' }} />}
                  label='Blue'
                />
                <FormControlLabel
                  value='#F9A825'
                  control={<Radio style={{ color: '#F9A825' }} />}
                  label='Yellow'
                />
                <FormControlLabel
                  value='#388E3C'
                  control={<Radio style={{ color: '#388E3C' }} />}
                  label='Green'
                />
                <FormControlLabel
                  value='#D81B60'
                  control={<Radio style={{ color: '#D81B60' }} />}
                  label='Pink'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item lg={8}>
            <FormControl fullWidth component='fieldset'>
              <h2 id='simple-modal-title'>Enter a Note</h2>
              <TextField
                fullWidth
                variant='filled'
                label='Title'
                name='title'
                className={clsx(classes.textField)}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant='filled'
                label='Notes'
                multiline
                rows={10}
                name='note'
                className={clsx(classes.textField)}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid container>
            <Grid item xs={6}></Grid>
            <Grid item xs={6} className={classes.buttonContainer}>
              <Button variant='contained' color='secondary' type='submit'>
                Create Note
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );

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
  );
}
