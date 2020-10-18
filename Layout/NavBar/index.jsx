import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import useStyles from './navbar.styles'

const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='fixed' elevation={0} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <img src='./logo.svg' alt='Note Logo' className={classes.logo} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
