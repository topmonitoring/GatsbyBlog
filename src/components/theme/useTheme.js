import React, { useState, useEffect } from 'react'
import storage from 'local-storage-fallback'

const useTheme = (defaultTheme = { mode: 'dark' }) => {
  const [theme, _setTheme] = useState(getInitialTheme)

  function getInitialTheme() {
    const savedTheme = storage.getItem('theme')
    return savedTheme && savedTheme !== undefined
      ? JSON.parse(savedTheme)
      : defaultTheme
  }

  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
  }
}
export default useTheme
