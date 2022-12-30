import React from 'react'
import Navigation from '../components/Navigation/Navigation'

interface MainTemplateProps {
  children: React.ReactNode
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Navigation />
      <div className='w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-green-900 auto-rows-min 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 flex justify-center items-center'>
        <div className='w-full min-h-screen bg-gradient-to-r dark:from-gray-900 from-white dark:via-gray-700 via-gray-400 dark:to-green-900 to-green-500 grid auto-rows-min 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          {children}
        </div>
      </div>
    </>
  )
}

export default MainTemplate
