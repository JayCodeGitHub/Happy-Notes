import React from 'react'
import Navigation from '../components/Navigation/Navigation'

interface MainTemplateProps {
  children: React.ReactNode
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default MainTemplate
