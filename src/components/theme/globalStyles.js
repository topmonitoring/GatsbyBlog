import { createGlobalStyle } from 'styled-components'
import theme from 'styled-theming'

const white = '#fff'
const dark = '#000'
const lightblue = 'aqua'
const darkblue = 'blue'
const greyIsh = 'rgba(0, 0, 0, 0.47)'
const whiteIsh = 'rgb( 134, 135, 138)'
const lightWhite = '#D8DEE9'
const lightBlack = '#2d3436 '
const darkDark = '#3B4252'
const lighterWhite = '#E5E9F0'

export const Colors = {
  white,
  dark,
  lightblue,
  darkblue,
  greyIsh,
  whiteIsh,
  lightWhite,
  lightBlack,
  darkDark,
  lighterWhite,
}

const getGlobalBackground = theme('mode', {
  light: Colors.white,
  dark: Colors.dark,
})

const getGlobalForeground = theme('mode', {
  light: Colors.dark,
  dark: Colors.white,
})

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Avenir';
  font-weight: 400;
  font-style: normal;
  src: url('/avenir-400.woff2') format('woff2');
  font-display: swap;
}

body {
  background-color: ${getGlobalBackground};
  color: ${getGlobalForeground};
  font-size: 1em;
  font-family: 'Avenir', Tahoma, Arial, Helvetica, sans-serif;
  line-height: 1.65;
  margin: 0px;
}

a {
  color: currentColor;
}
p{
  margin:0px;
}
`
