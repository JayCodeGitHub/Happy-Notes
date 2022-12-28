import React, { useState } from 'react'
import Card from '../components/Card/Card'
import Form from '../components/FormSection/FormSection'

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
      <Form type={'todo'} items={todos} setItems={setTodos} />
    </div>
  )
}

export default ToDo
