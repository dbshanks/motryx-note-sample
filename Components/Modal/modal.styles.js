import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '50%',
    height: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    width: '30rem',
    backgroundColor: theme.palette.common.white,
    marginBottom: '1rem',
  },
  margin: {
    margin: theme.spacing(1),
  },
}))

export default useStyles
