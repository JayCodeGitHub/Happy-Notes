import React, { useContext, useState } from 'react'

interface AppProvidersProps {
  children: React.ReactNode
}

const AuthContext = React.createContext({} as any)

export const AuthProvider = ({ children }: AppProvidersProps) => {
  const [user, setUser] = useState(false)

  const logIn = async () => {
    setUser(true)
    console.log(user)
  }

  const logOut = () => {
    setUser(false)
  }

  return <AuthContext.Provider value={{ user, logIn, logOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const auth = useContext(AuthContext)

  return auth
}
