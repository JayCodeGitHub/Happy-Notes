import React from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  { name: 'Notes', href: '/notes' },
  { name: 'Todos', href: '/todo' },
  { name: 'Sites', href: '/sites' },
]

function Notes() {
  return (
    <nav>
      <ul>
        {menuItems.map(({ name, href }, i) => (
          <Link to={href} key={i}>
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Notes
