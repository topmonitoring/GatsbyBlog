const React = require('react')
const { ThemeProvider } = require('styled-components')
const useTheme = require('./src/components/theme/useTheme')

const theme = useTheme

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
