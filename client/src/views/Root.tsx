import React from 'react'
import { useAuth } from '../hooks/useAuth'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

function Root() {
  const { user } = useAuth()
  return <>{user != null ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>
}

export default Root
