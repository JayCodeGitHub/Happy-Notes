import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from '../components/Card/Card'
import AddNewItem from '../components/AddNewItem/AddNewItem'
import { State } from '../state/index'
import { actionCreators } from '../state'

function Notes() {
  const [notes, setNotes] = useState([])
  const dispatch = useDispatch()
  const state = useSelector((state: State) => state.notes)
  const { addnote } = bindActionCreators(actionCreators, dispatch)
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
