import React, { useState } from 'react'
import Card from '../components/Card/Card'
import Form from '../components/Form/Form'

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
    <div>
      <h1 className='text-3xl font-bold underline text-red-500'>Notes</h1>
      {notes.map(({ id, title, body }) => (
        <Card title={title} body={body} type='note' key={id} />
      ))}
      <Form />
    </div>
  )
}

export default Notes
