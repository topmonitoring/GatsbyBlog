import React, { useState, useEffect } from 'react'

function useTheme(getInitialTheme) {
  const [theme, _setTheme] = useState(getInitialTheme)

  function getInitialTheme() {
    const savedTheme = window.localStorage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : { mode: 'dark' }
  }

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
  }
}
export default useTheme
