import { createGlobalStyle } from 'styled-components'
import {
  getGlobalBackground,
  getGlobalForeground,
  getBackgroundForNavAndFooter,
} from './colors'

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Avenir';
  font-weight: 400;
  font-style: normal;
  src: url('/avenir-400.woff2') format('woff2');
  font-display: swap;
}

nav{
  background-color: ${getBackgroundForNavAndFooter};
}
footer{
  background-color: ${getBackgroundForNavAndFooter};
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
