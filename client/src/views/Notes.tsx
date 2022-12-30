import React, { useState } from 'react'
import Card from '../components/Card/Card'

function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Hello World',
      body: 'Lorem Ipsum',
    },
    {
      id: 2,
      title: 'Hello World',
      body: 'Lorem Ipsum',
    },
  ])
  return (
    <>
      {notes.map(({ id, title, body }) => (
        <Card title={title} body={body} type='note' key={id} />
      ))}
    </>
  )
}

export default Notes
