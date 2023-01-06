import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card/Card'
import AddNewItem from '../components/AddNewItem/AddNewItem'
import { State } from '../state/index'

function Notes() {
  const [notes, setNotes] = useState([])
  const state = useSelector((state: State) => state.notes)
  return (
    <>
      {state.notes.map(({ title, body }) => (
        <Card title={title} body={body} type='note' key={title} />
      ))}
      <AddNewItem items={notes} setItems={setNotes} type='note' />
    </>
  )
}

export default Notes
