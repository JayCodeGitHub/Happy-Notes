import React, { useState } from 'react'
import Card from '../components/Card/Card'

function ToDo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'shopping',
    },
    {
      id: 2,
      title: 'yoga',
    },
  ])
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-red-500'>ToDos</h1>
      {todos.map(({ id, title }) => (
        <Card title={title} type='todo' key={id} />
      ))}
    </div>
  )
}

export default ToDo
