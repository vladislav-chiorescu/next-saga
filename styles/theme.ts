import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const breakPointsSettings = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const theme = createMuiTheme({
  breakpoints: {
    values: { ...breakPointsSettings },
  },
  colors: {
    green: '#30836D',
    lightGreen: '#3DBB9A',
    magenta: '#ED3262',
    yellow: '#B58246',
    lightYellow: '#F8B464',
    darkBlue: '#15191E',
    lightBlue: '#F7F8F9',
    white: '#FFFFFF',
    grey: '#F2F2F2',
    black: '#000000',
  },
});
