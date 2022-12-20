import React from 'react'
import { BrowserRouter } from 'react-router-dom'

interface AppProvidersProps {
  children: React.ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return <BrowserRouter>{children}</BrowserRouter>
}

export default AppProviders
