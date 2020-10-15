import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from '@Layout/NavBar/navbar.styles'

const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='fixed' elevation={0} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6'>NoT</Typography>
          <IconButton edge='start' aria-label='menu'>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
