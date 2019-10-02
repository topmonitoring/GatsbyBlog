import style from 'styled-theming'
//import theme from 'styled-theming'

export const getGlobalBackground = style('mode', {
  light: '#EEE',
  dark: '#111',
})

export const getGlobalForeground = style('mode', {
  light: '#111',
  dark: '#EEE',
})

export const getBackgroundForComments = style('mode', {
  light: '#D8DEE9  ',
  dark: '#2d3436 ',
})
export const getBackgroundForNavAndFooter = style('mode', {
  light: '#D8DEE9  ',
  dark: '#2d3436 ',
})

export const getBackgroundForBlogPost = style('mode', {
  light: '#fff',
  dark: '#3B4252 ',
})

export const getBackgroundForBlogPostsPreview = style('mode', {
  light: '#fff',
  dark: '#2E3440',
})

export const getBackgroundForArticlePreview = style('mode', {
  light: '#E5E9F0',
  dark: '#3B4252 ',
})
export const getForegroundForDate = style('mode', {
  light: 'blue',
  dark: 'aqua',
})
