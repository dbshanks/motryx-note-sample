import Head from 'next/head'
import useStyles from './index.styles'

export default function Home() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Head>
        <title>NoT App</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <img src='./logo.svg' alt='' className={classes.logo} />
    </div>
  )
}
