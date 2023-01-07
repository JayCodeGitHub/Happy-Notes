import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from '../NavLink/NavLink'
import Hamburger from '../Hamburger/Hamburger'
import MobileMenu from '../MobileMenu/MobileMenu'
import { useHamburger } from '../../hooks/useHamburger'
import { NavigationItems } from '../../assets/items/NavigationItems/NavigationItems'
import DarkModeToggle from '../../DarkModeToggle/DarkModeToggle'

function Navigation() {
  const { isOpen, toggleNavigation, setIsOpenFalse } = useHamburger()
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
            <Hamburger isOpen={isOpen} toggleNavigation={toggleNavigation} />
          </div>
          <MobileMenu isOpen={isOpen} setIsOpenFalse={setIsOpenFalse} />
        </div>
        <div className='md:flex hidden h-full'>
          <div className=' w-1/2 h-full flex items-center justify-center'>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
