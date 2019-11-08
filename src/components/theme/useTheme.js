import React, { useState, useEffect } from 'react'
import storage from 'local-storage-fallback'

const useTheme = () => {
  const [theme, _setTheme] = useState(getInitialTheme)
  const [DefoutTheme, _setDefoutTheme] = useState({ mode: 'light' })

  function getInitialTheme() {
    const savedTheme = storage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : DefoutTheme
  }

  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme))
    _setDefoutTheme(JSON.parse(storage.getItem('theme')))
  }, [theme])

  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
  }
}
export default useTheme
