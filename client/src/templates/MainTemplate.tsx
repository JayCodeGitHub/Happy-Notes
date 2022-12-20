import React from 'react'
import Navigation from '../components/Navigation/Navigation'

interface AppProvidersProps {
  children: React.ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default AppProviders
