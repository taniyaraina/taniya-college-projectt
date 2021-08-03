import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const mainBrandColor = '#3368C6';
const lightShades = '#F5F5F5';
const darkAccent = '#3173DC';
const darkShades = '#0A0A0A';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#3368C6',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: '#3368C6',
  secondaryColor: '#031b4e',
  colorWhite: '#ffffff',
  // darkBlack: '#222222',//
  lighterBlack: '#000',
  textGrayishblue: '##8893b9',
  bodyColor: '#404040',
  // backgroundInputColor: lightShades,
  // backgroundInputColorDark: darkShades,
  // textColor: darkShades, // '#0A0B11',
  boxShadow: '0px 0px 35px 0px rgb(0 0 0 / 15%)',
  primaryFontFamily: "'poppins', sans-serif",
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: ${theme.primaryFontFamily};
    overflow-x: hidden;

  }
  .nav-items-colors {
    color: ${theme.primaryColor}!important;
    opacity: 0.9;
  }


  .card {
    background-color: ${theme.colorWhite}!important;
    box-shadow: ${theme.boxShadow};
  }
  i {
    color: ${theme.colorWhite}!important;
  }
  a {
    ${'' /* color: ${theme.colorWhite}!important; */}
  }
  .text-yellow-900 {
    color: ${theme.secondaryColor}!important;
  }
  .bg-yellow-900 {
    background-color: ${theme.secondaryColor}!important;
  }
  .grey {
    color: ${theme.textGray}!important;
  }
  .white {
    color: ${theme.colorWhite}!important;
  }
`;

export default GlobalStyle;
