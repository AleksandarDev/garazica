import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const isDark = !(new Date().getHours() > 6 && new Date().getHours() < 20);
const theme = createMuiTheme({
  palette: {
    type: isDark ? 'dark' : 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: isDark ? '#121212' : '#ffffff'
    },
  },
});

export default theme;