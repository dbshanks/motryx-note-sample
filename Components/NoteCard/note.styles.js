import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  note: {
    position: 'relative',
    padding: '1.2rem',
    width: '19rem',
    height: '18rem',
    cursor: 'pointer',
    zIndex: 100,
  },
  noteTitle: {
    fontWeight: 600,
    color: theme.palette.common.white,
  },
  noteBody: {
    fontWeight: 100,
    color: theme.palette.common.white,
  },
}))

export default useStyles
