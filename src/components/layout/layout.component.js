import React from 'react'
import { GlobalStyles } from './globalStyles.js'
import Heder from '../heder/heder.component'
import Footer from '../footer/footer.component'

const Template = ({ location, children }) => {
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <>
      <GlobalStyles />
      <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
        <Heder />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Template
