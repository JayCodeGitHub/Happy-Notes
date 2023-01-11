import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from '../components/Card/Card'
import AddNewItem from '../components/AddNewItem/AddNewItem'
import { State } from '../state/index'
import { actionCreators } from '../state'

function Notes() {
  const dispatch = useDispatch()
  const state = useSelector((state: State) => state)
  const { additem } = bindActionCreators(actionCreators, dispatch)
  return (
    <>
      {state.notes.map(({ title, body, _id, itemType }) => (
        <Card title={title} body={body} type={itemType} _id={_id} key={title} />
      ))}
      <AddNewItem setItems={additem} type='notes' />
    </>
  )
}

export default Notes
