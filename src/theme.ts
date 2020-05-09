import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = (isDark: boolean) => createMuiTheme({
  palette: {
    type: isDark ? 'dark' : 'light',
    primary: {
      light: '#000000',
      main: '#000000',
      dark: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: isDark ? '#121212' : '#ffffff',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
      },
    },
  },
});

export default theme;
