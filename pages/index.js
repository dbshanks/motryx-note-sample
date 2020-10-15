import Head from 'next/head'
import { Typography } from '@material-ui/core'
import useStyles from './index.styles'

export default function Home() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Head>
        <title>Create Next App</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <Typography variant='h3'>Hello World</Typography>
    </div>
  )
}
