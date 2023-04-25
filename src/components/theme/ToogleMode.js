import React from 'react'
import { ThemeConsumer } from 'styled-components'
import Button from './SunAndMoon'

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {theme => (
        <div
          style={{ margin: 'auto 0' }}
          onClick={e =>
            theme.setTheme(
              theme.mode === 'dark'
                ? { ...theme, mode: 'light' }
                : { ...theme, mode: 'dark' }
            )
          }
        >
          <Button />
        </div>
      )}
    </ThemeConsumer>
  )
}
