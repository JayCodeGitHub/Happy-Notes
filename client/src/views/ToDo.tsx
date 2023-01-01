import React, { useState } from 'react'
import Card from '../components/Card/Card'
import AddNewItem from '../components/AddNewItem/AddNewItem'

function ToDo() {
  const [todos, setTodos] = useState([])
  return (
    <>
      {todos.map(({ id, title }) => (
        <Card title={title} type='todo' key={id} />
      ))}
      <AddNewItem items={todos} setItems={setTodos} type='todo' />
    </>
  )
}

export default ToDo
