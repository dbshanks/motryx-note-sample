import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  note: {
    position: 'relative',
    padding: '1.2rem',
    width: '19rem',
    height: '18rem',
    cursor: 'grab',
  },
  noteTitle: {
    fontWeight: 600,
    color: theme.palette.common.white,
    marginBottom: '2rem',
  },
  noteBodyContainer: {
    width: '100%',
    height: '65%',
  },
  deleteBar: {
    width: '100%',
    textAlign: 'right',
    color: theme.palette.common.white,
  },
  noteBody: {
    fontWeight: 400,
    color: theme.palette.common.white,
  },
  deleteIcon: {
    cursor: 'pointer',
  },
}));

export default useStyles;
