import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from '../NavLink/NavLink'

const menuItems = [
  { name: 'Notes', href: '/notes' },
  { name: 'Todos', href: '/todo' },
  { name: 'Sites', href: '/sites' },
]

function Notes() {
  return (
    <div className='w-full h-20 dark:text-white text-black dark:bg-gray-800 bg-white flex justify-between px-6 border-b-2 dark:border-white border-black'>
      <div className=' w-52 flex justify-center items-center'>
        <Link to='/notes'>
          <h1 className='text-xl dark:hover:text-gray-500 hover:text-gray-600 duration-100 transition-all ease-in-out'>
            Happy Notes
          </h1>
        </Link>
      </div>
      <div className=' flex justify-center items-center'>
        <div className='hidden md:flex md:justify-between md:w-80 md:mx-8'>
          {menuItems.map((item) => (
            <NavLink to={item.href} key={item.name}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notes
