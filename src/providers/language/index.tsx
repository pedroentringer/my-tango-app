import React, { createContext, ReactNode, useState } from 'react'

export interface ContextProvider {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}

export const LanguageContext = createContext({} as ContextProvider)

interface AuthProviderProps {
  children?: ReactNode
}

const DEFAULT_VALUE = 'en'

const LanguageProvider = ({ children }: AuthProviderProps) => {
  const [language, setLanguage] = useState(DEFAULT_VALUE)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
