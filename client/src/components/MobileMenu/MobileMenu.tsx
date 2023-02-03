import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import NavLink from '../NavLink/NavLink'
import { NavigationItems } from '../../assets/items/NavigationItems/NavigationItems'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import LogOutButton from '../LogOutButton/LogOutButton'
import { useHamburger } from '../../hooks/useHamburger'
import GitHubButton from '../GitHubButton/GitHubButton'

const variants = {
  open: { x: 0, display: 'flex' },
  closed: { x: '100%', display: 'none' },
}

function MobileMenu() {
  const { isOpen, toggleIsOpen } = useHamburger()
  const shouldReduceMotion = useReducedMotion()
  const transition = shouldReduceMotion ? { duration: 0 } : {}
  let state = 'closed'
  if (isOpen) {
    state = 'open'
  } else {
    state = 'closed'
  }
  return (
    <motion.div
      animate={state}
      variants={variants}
      transition={transition}
      className='absolute right-0 top-0 w-3/5 h-full dark:bg-gray-800 bg-white z-10 pt-40 flex flex-col justify-between border-l-2 dark:border-white border-black'
    >
      <div className='w-full h-48 flex flex-col items-center justify-around'>
        {NavigationItems.map((item) => (
          <NavLink to={item.href} key={item.name} onClick={toggleIsOpen}>
            {item.name}
          </NavLink>
        ))}
      </div>
      <div>
        <div className=' w-full h-28 flex items-center justify-center'>
          <DarkModeToggle />
        </div>
        <div className=' w-full h-28 flex items-center justify-center'>
          <GitHubButton />
        </div>
        <div className=' w-full h-28 flex items-center justify-center'>
          <LogOutButton />
        </div>
      </div>
    </motion.div>
  )
}

export default MobileMenu
