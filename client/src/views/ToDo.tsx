import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from '../components/Card/Card'
import AddNewItem from '../components/AddNewItem/AddNewItem'
import { State } from '../state/index'
import { actionCreators } from '../state'

function ToDo() {
  const dispatch = useDispatch()
  const state = useSelector((state: State) => state)
  const { addItem } = bindActionCreators(actionCreators, dispatch)
  return (
    <>
      {state.todos.map(({ title, _id, itemType }) => (
        <Card title={title} type={itemType} _id={_id} key={title} />
      ))}
      <AddNewItem setItems={addItem} type='todos' />
    </>
  )
}

export default ToDo
