import style from 'styled-theming'
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

export const getGlobalBackground = theme('mode', {
  light: white,
  dark: dark,
})

export const getGlobalForeground = theme('mode', {
  light: dark,
  dark: white,
})

export const getBackgroundForComments = theme('mode', {
  light: lightWhite,
  dark: lightBlack,
})
export const getBackgroundForNavAndFooter = theme('mode', {
  light: lightWhite,
  dark: lightBlack,
})

export const getBackgroundForBlogPost = theme('mode', {
  light: lightWhite,
  dark: darkDark,
})

export const getBackgroundForBlogPostsPreview = theme('mode', {
  light: lightWhite,
  dark: '#2E3440',
})

export const getBackgroundForArticlePreview = theme('mode', {
  light: lighterWhite, //'#E5E9F0'
  dark: darkDark, //#3B4252
})
export const getForegroundForDate = theme('mode', {
  light: darkblue,
  dark: lightblue,
})
export const getBoxShadow = theme('mode', {
  light: greyIsh,
  dark: whiteIsh,
})
