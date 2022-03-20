import React, { FC } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './styles/theme'
import AppBar from './components/AppBar'

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
    </ThemeProvider>
  )
}

export default App
