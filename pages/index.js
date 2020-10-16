import { useRef } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import useStyles from './index.styles'
import { motion } from 'framer-motion'
import NoteCard from '../Components/NoteCard'

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
        <motion.div drag dragConstraints={constraintsRef}>
          <NoteCard {...item} key={item._id} />
        </motion.div>
      ))}
      <img src='./logo.svg' alt='' className={classes.logo} />
    </motion.div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/note')
  const { data } = await res.json()

  return { data: data }
}

export default Home
