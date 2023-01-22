import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../state/store/store'
import { AuthProvider } from '../hooks/useAuth'
import { HamburgerProvider } from '../hooks/useHamburger'

interface AppProvidersProps {
  children: React.ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <HamburgerProvider>{children}</HamburgerProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default AppProviders
