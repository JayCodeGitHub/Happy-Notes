import React, { useState } from 'react'
import Card from '../components/Card/Card'
import AddNewItem from '../components/AddNewItem/AddNewItem'

function Notes() {
  const [notes, setNotes] = useState([])
  return (
    <>
      {notes.map(({ id, title, body }) => (
        <Card title={title} body={body} type='note' key={id} />
      ))}
      <AddNewItem items={notes} setItems={setNotes} type='note' />
    </>
  )
}

export default Notes
