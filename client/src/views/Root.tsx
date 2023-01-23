import React from 'react'
import { useError } from '../hooks/useError'
import { useAuth } from '../hooks/useAuth'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

function Root() {
  const { user } = useAuth()
  const { error } = useError()
  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {user != null ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  )
}

export default Root
