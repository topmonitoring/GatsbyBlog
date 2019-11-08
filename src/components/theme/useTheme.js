import React, { useState, useEffect } from 'react'
import storage from 'local-storage-fallback'

const useTheme = () => {
  const [theme, _setTheme] = useState({ mode: 'light' })

  function getInitialTheme() {
    const savedTheme = storage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' }
  }
  useEffect(() => {
    _setTheme(getInitialTheme)
  }, [])

  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
  }
}
export default useTheme
