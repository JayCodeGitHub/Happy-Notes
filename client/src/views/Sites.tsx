import React, { useState } from 'react'
import Card from '../components/Card/Card'

function Sites() {
  const [sites, setSites] = useState([
    {
      id: 1,
      title: 'https://www.facebook.com/',
    },
    {
      id: 2,
      title: 'https://www.instagram.com/',
    },
  ])
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-red-500'>Sites</h1>
      {sites.map(({ id, title }) => (
        <Card title={title} type='site' key={id} />
      ))}
    </div>
  )
}

export default Sites
