import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from '../components/Card/Card'
import AddNewItem from '../components/AddNewItem/AddNewItem'
import { State } from '../state/index'
import { actionCreators } from '../state'

function ToDo() {
  const dispatch = useDispatch()
  const state = useSelector((state: State) => state.todos)
  const { additem } = bindActionCreators(actionCreators, dispatch)
  return (
    <>
      {state.todos.map(({ title }) => (
        <Card title={title} type='todos' key={title} />
      ))}
      <AddNewItem setItems={additem} type='todos' />
    </>
  )
}

export default ToDo
