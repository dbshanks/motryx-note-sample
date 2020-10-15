import { useRef, useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import NoteIcon from '@material-ui/icons/NoteAdd'
import HomeIcon from '@material-ui/icons/Home'
import useStyles from '@Layout/BottomNav/bottomnav.styles'
import InputModal from '@Components/Modal'

const BottomNav = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <BottomNavigation className={classes.root} showLabels>
      <BottomNavigationAction
        label='New Note'
        icon={<NoteIcon color='secondary' fontSize='large' />}
        onClick={handleOpen}
      />
      <BottomNavigationAction
        label='Home'
        icon={<HomeIcon color='secondary' fontSize='large' />}
      />
      <BottomNavigationAction
        label='Nearby'
        icon={<LocationOnIcon color='secondary' fontSize='large' />}
      />
      <InputModal handleClose={handleClose} open={open} />
    </BottomNavigation>
  )
}

export default BottomNav
