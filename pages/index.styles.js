import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.2,
    zIndex: 1,
  },
})

export default useStyles
