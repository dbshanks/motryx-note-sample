import { useRef } from 'react'
import Head from 'next/head'
import NoteCard from './[id]'
import fetch from 'isomorphic-unfetch'
import { motion } from 'framer-motion'
import useStyles from './index.styles'

const Home = ({ data }) => {
  const constraintsRef = useRef()
  const classes = useStyles()

  return (
    <motion.div className={classes.root} ref={constraintsRef}>
      <Head>
        <title>NoT App</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      {data.map((item) => (
        <NoteCard {...item} constraintsRef={constraintsRef} key={item._id} />
      ))}
    </motion.div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch(`http://localhost:3000/api/note/`)
  const { data } = await res.json()

  return { data: data }
}

export default Home
