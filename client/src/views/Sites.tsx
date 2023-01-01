import React, { useState } from 'react'
import Card from '../components/Card/Card'
import AddNewItem from '../components/AddNewItem/AddNewItem'

function Sites() {
  const [sites, setSites] = useState([])
  return (
    <>
      {sites.map(({ id, title }) => (
        <Card title={title} type='site' key={id} />
      ))}
      <AddNewItem items={sites} setItems={setSites} type='site' />
    </>
  )
}

export default Sites
