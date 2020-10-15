import Head from 'next/head'
import { Typography } from '@material-ui/core'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <Typography variant='h3'>Hello World</Typography>
    </div>
  )
}
