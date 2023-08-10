import React from 'react'
import { GlobalStyles } from '../theme/globalStyles'
import Heder from '../heder/heder.component'
import Footer from '../footer/footer.component'

import { ThemeProvider } from 'styled-components'
import useTheme from '../theme/useTheme'

const Template = ({ location, children }) => {
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <>
        <div
          style={{
            height: '100%',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <GlobalStyles />
          <Heder />
          {children}
          <Footer />
        </div>
      </>
    </ThemeProvider>
  )
}

export default Template
