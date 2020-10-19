import { useRef, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import InputModal from '../../Components/Modal';
import NoteIcon from '@material-ui/icons/NoteAdd';
import useStyles from './bottomnav.styles';

const BottomNav = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BottomNavigation className={classes.root} showLabels>
      <BottomNavigationAction
        label='New Note'
        icon={
          <NoteIcon
            color='secondary'
            fontSize='large'
            className={classes.icon}
          />
        }
        onClick={handleOpen}
      />

      <InputModal handleClose={handleClose} open={open} />
    </BottomNavigation>
  );
};

export default BottomNav;
