import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from '../components/Card/Card'
import AddNewItem from '../components/AddNewItem/AddNewItem'
import { State } from '../state/index'
import { actionCreators } from '../state'

function ToDo() {
  const [todos, setTodos] = useState([])
  const dispatch = useDispatch()
  const state = useSelector((state: State) => state.todos)
  const { addtodo } = bindActionCreators(actionCreators, dispatch)
  return (
    <>
      {state.todos.map(({ title }) => (
        <Card title={title} type='todo' key={title} />
      ))}
      <AddNewItem items={todos} setItems={addtodo} type='todo' />
    </>
  )
}

export default ToDo
