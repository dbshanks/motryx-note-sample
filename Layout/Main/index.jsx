import { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import NavBar from '../NavBar'
import BottomNav from '../BottomNav'

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
