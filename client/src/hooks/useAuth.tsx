import React, { useContext, useState } from 'react'

interface AppProvidersProps {
  children: React.ReactNode
}

interface AuthContextProps {
  user: boolean
  logIn: () => void
  logOut: () => void
}

const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps)

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
