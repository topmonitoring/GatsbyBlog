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

export const getGlobalBackground = theme('mode', {
  light: Colors.white,
  dark: Colors.dark,
})

export const getGlobalForeground = theme('mode', {
  light: Colors.dark,
  dark: Colors.white,
})

export const getBackgroundForComments = theme('mode', {
  light: Colors.lightWhite,
  dark: Colors.lightBlack,
})
export const getBackgroundForNavAndFooter = theme('mode', {
  light: Colors.lightWhite,
  dark: Colors.lightBlack,
})

export const getBackgroundForBlogPost = theme('mode', {
  light: Colors.lightWhite,
  dark: Colors.darkDark,
})

export const getBackgroundForBlogPostsPreview = theme('mode', {
  light: Colors.lightWhite,
  dark: '#2E3440',
})

export const getBackgroundForArticlePreview = theme('mode', {
  light: Colors.lighterWhite,
  dark: Colors.darkDark,
})
export const getForegroundForDate = theme('mode', {
  light: Colors.darkblue,
  dark: Colors.lightblue,
})
export const getBoxShadow = theme('mode', {
  light: Colors.greyIsh,
  dark: Colors.whiteIsh,
})
