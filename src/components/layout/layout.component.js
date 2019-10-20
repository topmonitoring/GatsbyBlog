import React from 'react'
import { GlobalStyles } from '../theme/globalStyles.js'
import Heder from '../heder/heder.component'
import Footer from '../footer/footer.component'

import { ThemeProvider } from 'styled-components'
import useTheme from '../theme/useTheme'
import SEO from '../seo/seo.component'

const Template = ({ location, children }) => {
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }
  const theme = useTheme(theme)
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <GlobalStyles />
        <div
          style={{
            height: '100%',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <Heder />
          {children}
          <Footer />
        </div>
      </>
    </ThemeProvider>
  )
}

export default Template
