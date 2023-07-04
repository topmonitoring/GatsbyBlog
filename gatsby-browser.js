const React = require('react')
const useFontsource= require("@fontsource/open-sans") // Defaults to weight 400 with normal variant.
const { ThemeProvider } = require('styled-components')
const useTheme = require('./src/components/theme/useTheme')

const theme = useTheme

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

