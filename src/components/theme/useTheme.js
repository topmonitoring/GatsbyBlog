import React, { useState, useEffect } from 'react'
import storage from 'local-storage-fallback'

function useTheme(getInitialTheme = { mode: 'dark' }) {
  const [theme, _setTheme] = useState(getInitialTheme)

  function getInitialTheme() {
    const savedTheme = window.localStorage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme
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

if(typeof window !== 'undefined'){
  export default { mode: 'dark' }
}
else{
  export default useTheme
}