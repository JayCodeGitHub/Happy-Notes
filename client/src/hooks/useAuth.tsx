import React, { useContext, useState } from 'react'

interface AuthProviderProps {
  children: React.ReactNode
}

interface AuthContextProps {
  user: boolean
  logIn: () => void
  logOut: () => void
  register: () => void
}

const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(false)

  const logIn = async () => {
    setUser(true)
  }

  const logOut = () => {
    setUser(false)
  }

  const register = () => {
    setUser(true)
  }

  return (
    <AuthContext.Provider value={{ user, logIn, logOut, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const auth = useContext(AuthContext)

  return auth
}
