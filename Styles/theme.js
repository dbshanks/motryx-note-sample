import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#29B6F6',
    },
    secondary: {
      main: '#FF4081',
      light: '#EC407A',
    },
    error: {
      main: '#FF3D00',
    },
    warning: {
      main: '#FFB300',
    },
    success: {
      main: '#00E676',
    },
    common: {
      black: '#212121',
      white: '#FFFFFF',
    },
  },
});

export default theme;
