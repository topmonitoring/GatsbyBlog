import style from 'styled-theming'
import theme from 'styled-theming'
import { Colors } from './globalStyles'

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

export const getBackgroundForSearchBoxHover = theme('mode', {
  light: 'white',
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
export const getButtonColor = theme('mode', {
  light: Colors.blueIsh,
  dark: Colors.darkenBluIsh,
})
