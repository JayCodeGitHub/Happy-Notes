import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainTemplate from '../templates/MainTemplate'
import Notes from './Notes'
import ToDo from './ToDo'
import Sites from './Sites'

function Root() {
  return (
    <MainTemplate>
      <Routes>
        <Route path='/' element={<Navigate to='/notes' />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/todo' element={<ToDo />} />
        <Route path='/sites' element={<Sites />} />
      </Routes>
    </MainTemplate>
  )
}

export default Root
