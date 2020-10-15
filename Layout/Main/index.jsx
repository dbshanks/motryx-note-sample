import { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import NavBar from '@Layout/NavBar'
import BottomNav from '@Layout/BottomNav'

const Main = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
      <BottomNav />
    </Fragment>
  )
}

export default Main
