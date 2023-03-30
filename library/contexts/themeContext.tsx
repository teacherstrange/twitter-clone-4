// ThemeContext.tsx

import { createContext, useState, useEffect } from 'react'
import { Sun, Moon } from '../icons'

type ThemeContextProps = {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  themeIcon: any
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => {},
  themeIcon: <Sun />,
})

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const themeIcon = theme === 'light' ? <Sun /> : <Moon />

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeIcon }}>
      {children}
    </ThemeContext.Provider>
  )
}
