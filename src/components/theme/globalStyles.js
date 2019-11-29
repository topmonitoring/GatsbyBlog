import { createGlobalStyle } from 'styled-components'
import theme from 'styled-theming'

const white = '#fff'
const dark = '#000'
const lightblue = 'aqua'
const darkblue = 'blue'
const blueIsh = 'rgb(144, 186, 245)'
const darkenBluIsh = 'rgb(129, 164, 214)'
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
  blueIsh,
  darkenBluIsh,
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
  font-family: 'Emberly';
  font-weight: 100 900; 
  font-style: normal;
  src: url('/Emberly Variable Regular-VF.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'CrimsonPro-Roman';
  font-weight: 100 900; 
  font-style: normal;
  src: url('/CrimsonPro-Roman-VF.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'CrimsonPro-italic';
  font-weight: 100 900; 
  font-style: normal;
  src: url('/CrimsonPro-italic-VF.ttf') format('truetype');
  font-display: swap;
}

body {
  background-color: ${getGlobalBackground};
  color: ${getGlobalForeground};
  font-size: 1.1em;
  font-family: 'CrimsonPro-Roman', Tahoma, Arial, Helvetica, sans-serif;
  line-height: 1.65;
  margin: 0px;
}
blockquote{
  font-family: 'CrimsonPro-italic', Tahoma, Arial, Helvetica, sans-serif;
}
h1,h2{
  font-family: 'Emberly', Tahoma, Arial, Helvetica, sans-serif;
}

a {
  color: currentColor;
}
p{
  margin:0px;
}
`
