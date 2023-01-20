import React from 'react'
import { useAuth } from '../hooks/useAuth'

function UnauthenticatedApp() {
  const { logIn } = useAuth()
  return (
    <>
      <button onClick={logIn}>Login</button>
    </>
  )
}

export default UnauthenticatedApp
