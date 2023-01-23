import React from 'react'
import { Provider } from 'react-redux'
import store from '../state/store/store'
import { BrowserRouter } from 'react-router-dom'
import { ErrorProvider } from '../hooks/useError'
import { AuthProvider } from '../hooks/useAuth'
import { HamburgerProvider } from '../hooks/useHamburger'

interface AppProvidersProps {
  children: React.ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorProvider>
          <AuthProvider>
            <HamburgerProvider>{children}</HamburgerProvider>
          </AuthProvider>
        </ErrorProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default AppProviders
