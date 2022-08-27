import { darkThemeConfig, lightThemeConfig, CustomTheme } from 'components/Theme'
import React, { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const ThemeProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [theme, setTheme] = useState<CustomTheme>(darkThemeConfig)

  const themeProp = {
    ...theme, setTheme: () => {
      setTheme(s => s.colors.id === 'dark' ? lightThemeConfig : darkThemeConfig)
    }
  }

  return (
    <StyledThemeProvider theme={themeProp}>{children}</StyledThemeProvider>
  )
}

export default ThemeProvider