import style from 'styled-theming'
import theme from 'styled-theming'

export const getGlobalBackground = theme('mode', {
  light: '#EEE',
  dark: '#111',
})

export const getGlobalForeground = theme('mode', {
  light: '#111',
  dark: '#EEE',
})

export const getBackgroundForComments = theme('mode', {
  light: '#D8DEE9  ',
  dark: '#2d3436 ',
})
export const getBackgroundForNavAndFooter = theme('mode', {
  light: '#D8DEE9  ',
  dark: '#2d3436 ',
})

export const getBackgroundForBlogPost = theme('mode', {
  light: '#fff',
  dark: '#3B4252 ',
})

export const getBackgroundForBlogPostsPreview = theme('mode', {
  light: '#fff',
  dark: '#2E3440',
})

export const getBackgroundForArticlePreview = theme('mode', {
  light: '#E5E9F0',
  dark: '#3B4252 ',
})
export const getForegroundForDate = theme('mode', {
  light: 'blue',
  dark: 'aqua',
})
export const getBoxShadow = theme('mode', {
  light: 'rgba(0, 0, 0, 0.47)',
  dark: ' rgb( 134, 135, 138) ',
})
