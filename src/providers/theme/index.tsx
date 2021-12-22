import React, { createContext, ReactNode, useState } from 'react'

export interface ContextProvider {
  isDarkTheme: boolean
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
  handleTheme: () => void
}

export const ThemeContext = createContext({} as ContextProvider)

interface AuthProviderProps {
  children?: ReactNode
}

const DEFAULT_VALUE = false

const ThemeProvider = ({ children }: AuthProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(DEFAULT_VALUE)

  const handleTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
