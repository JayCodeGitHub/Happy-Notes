import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from '../NavLink/NavLink'
import Hamburger from '../Hamburger/Hamburger'
import MobileMenu from '../MobileMenu/MobileMenu'
import { NavigationItems } from '../../assets/items/NavigationItems/NavigationItems'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import LogOutButton from '../LogOutButton/LogOutButton'
import GitHubButton from '../GitHubButton/GitHubButton'

function Navigation() {
  return (
    <div className='w-full h-20 overflow-hidden dark:text-white text-black dark:bg-gray-800 bg-white flex justify-between px-6 border-b-2 dark:border-white border-black'>
      <div className=' w-52 flex justify-center items-center'>
        <Link to='/notes'>
          <h1 className='text-xl dark:hover:text-gray-500 hover:text-gray-600 duration-100 transition-all ease-in-out'>
            Happy Notes
          </h1>
        </Link>
      </div>
      <div className=' flex justify-center items-center'>
        <div className='hidden md:flex md:justify-between md:w-80 md:mx-8'>
          {NavigationItems.map((item) => (
            <NavLink to={item.href} key={item.name}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className='md:hidden'>
          <div className='relative z-20'>
            <Hamburger />
          </div>
          <MobileMenu />
        </div>
        <div className='md:flex w-56 hidden h-full'>
          <div className=' w-1/2 h-full flex items-center justify-center'>
            <DarkModeToggle />
          </div>
          <div className=' w-1/2 h-full flex items-center justify-center'>
            <GitHubButton />
          </div>
          <div className='w-1/2 h-full flex items-center justify-center'>
            <LogOutButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
